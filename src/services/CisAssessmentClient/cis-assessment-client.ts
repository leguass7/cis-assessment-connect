import axios, { AxiosError, InternalAxiosRequestConfig, type AxiosInstance } from "axios";
import {
  Authorization,
  ClientOptions,
  RequestAuthorization,
  RequestRefreshToken,
  ResponseCisAssessment,
} from "./cis-assessment-client.dto";
import { normalizeToken } from "./cis-assessment-client.helper";
import { SetStoreParams, StoreInterface } from "./store/store.interface";
import { MemoryStore } from "./store/memory.store";
import { GrantType, payloadByGrantType } from "./cis-assessment-auth.dto";
import { baseUrl } from "~/config";

export class CisAssessmentClient {
  public axios: AxiosInstance;
  private baseURL: string;

  constructor(
    private readonly options: ClientOptions,
    private readonly store?: StoreInterface,
  ) {
    this.baseURL =
      options?.baseURL || `https://${!!options?.development ? "back" : "api"}.aws.cisassessment.com.br/api/v1`;
    if (!store) this.store = new MemoryStore();
    this.axios = axios.create({ baseURL: this.baseURL });
    this.configure();
  }

  private configure() {
    this.axios.interceptors.request.use(async (config) => {
      const accessToken = await this.getAccessToken();
      if (!!this.options?.development) config.headers["ngrok-skip-browser-warning"] = true;
      if (accessToken) config.headers.Authorization = normalizeToken(accessToken);
      return config;
    });

    this.axios.interceptors.response.use(
      (axiosResponse) => axiosResponse,
      async (axiosError: AxiosError) => {
        const config = axiosError?.config;
        const status = axiosError?.response?.status;
        const data = (axiosError?.response?.data || {}) as ResponseCisAssessment;
        const message = data?.message || "timeout";

        const resolve: ResponseCisAssessment = { ...data, success: false, message };

        if (config && axiosError?.response) {
          if (status === 401 /* && message === "token_expired" */) {
            const accessToken = await this.refreshToken(config);
            if (accessToken) {
              config.headers.Authorization = normalizeToken(accessToken);
              try {
                return axios(config);
              } catch (error) {
                this.clearStore();
              }
            }
          }

          return Promise.resolve(resolve);
        }

        return Promise.resolve(resolve);
      },
    );
  }

  private async getAccessToken(): Promise<string | null> {
    const accessToken = (await this?.store?.get?.())?.accessToken || null;
    return accessToken;
  }

  public async getStore(): Promise<Authorization | null> {
    return (await this?.store?.get?.()) || null;
  }

  public async setStore(params: SetStoreParams): Promise<void> {
    this?.store?.set?.(params);
  }

  public async clearStore(): Promise<void> {
    this?.store?.clear?.();
  }

  private async refreshToken(config: InternalAxiosRequestConfig<any>): Promise<string | null> {
    const retryHeader = config.headers["Retry"];
    if (!retryHeader) {
      const authorization = await this?.store?.get();

      if (authorization?.refreshToken) {
        const newAuthorization = await this.requestRefreshToken(authorization?.refreshToken);
        if (newAuthorization?.accessToken) {
          const { accessToken, refreshToken, expiresIn } = newAuthorization;
          this?.store?.set({ accessToken, refreshToken, expiresIn });
          return accessToken;
        }
      }
    }
    return null;
  }

  async requestRefreshToken(refreshToken: string): Promise<ResponseCisAssessment<Authorization>> {
    const result: ResponseCisAssessment = { success: false, message: "invalid_refresh_token" };
    if (!refreshToken) return result as ResponseCisAssessment<Authorization>;

    const payload: RequestRefreshToken = {
      // clientId: this.options?.clientId,
      grantType: "refresh_token",
    };

    try {
      const response = await axios
        .create({ baseURL: this.baseURL })
        .post(`/oauth`, payload, { headers: { Retry: true } });
      return response?.data as ResponseCisAssessment<Authorization>;
    } catch (axiosError) {
      if (axiosError instanceof AxiosError) {
        const data = axiosError?.response?.data || {};
        return {
          ...data,
          success: false,
          message: data?.message || "timeout",
        } as ResponseCisAssessment<Authorization>;
      }
      return result as ResponseCisAssessment<Authorization>;
    }
  }

  async authenticate(
    email: string,
    password: string,
    grantType: GrantType,
    extraFields: any = {},
  ): Promise<ResponseCisAssessment<Authorization>> {
    const payload: RequestAuthorization = {
      clientId: this.options?.clientId,
      ...payloadByGrantType[grantType],
      ...extraFields,
    };

    if (grantType === "password") {
      payload.username = email;
      payload.password = password;
    }

    if (grantType === "clientCredentials") {
      payload.clientId = extraFields.clientId;
      payload.clientSecret = extraFields.clientSecret;
    }

    const response = await this.axios.post(`/oauth/authorize`, payload);
    return response?.data as ResponseCisAssessment<Authorization>;
  }
}
