import type { InternalAxiosRequestConfig } from 'axios';
import axios, { AxiosError, type AxiosInstance } from 'axios';

import type { IResponseCreditSummary } from '../credits/credits.dto';
import type { IPaginateParams, IResponseSendPassport } from '../inventory/inventory.dto';
import type { ICreatePassport, IResponsePaginatePassport, IResponsePassport } from '../passport/passport.dto';
import type { GrantType } from './cis-assessment-auth.dto';
import { payloadByGrantType } from './cis-assessment-auth.dto';
import type { Authorization, ClientOptions, RequestAuthorization, RequestRefreshToken, ResponseCisAssessment } from './cis-assessment-client.dto';
import { normalizeToken } from './cis-assessment-client.helper';
import { MemoryStore } from './store/memory.store';
import type { SetStoreParams, StoreInterface } from './store/store.interface';

import type { LangType } from '..';
export class CisAssessmentClient {
  public axios: AxiosInstance;
  private baseURL: string;

  constructor(
    private readonly options: ClientOptions,
    private readonly store?: StoreInterface,
  ) {
    this.baseURL = options?.baseURL || `https://${!!options?.development ? 'back' : 'api'}.aws.cisassessment.com.br/api/v1`;
    if (!store) this.store = new MemoryStore();
    this.axios = axios.create({ baseURL: this.baseURL });
    this.configure();
  }

  private configure() {
    this.axios.interceptors.request.use(async config => {
      const accessToken = await this.getAccessToken();
      if (!!this.options?.development) config.headers['ngrok-skip-browser-warning'] = true;
      if (accessToken) config.headers.Authorization = normalizeToken(accessToken);
      return config;
    });

    this.axios.interceptors.response.use(
      axiosResponse => axiosResponse,
      async (axiosError: AxiosError) => {
        const config = axiosError?.config;
        const status = axiosError?.response?.status;
        const data = (axiosError?.response?.data || {}) as ResponseCisAssessment;
        const message = data?.message || 'timeout';

        const resolve: ResponseCisAssessment = { ...data, message, success: false };

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
    const retryHeader = config.headers['Retry'];
    if (!retryHeader) {
      const authorization = await this?.store?.get();

      if (authorization?.refreshToken) {
        const newAuthorization = await this.requestRefreshToken(authorization?.refreshToken);
        if (newAuthorization?.accessToken) {
          const { accessToken, expiresIn, refreshToken } = newAuthorization;
          this?.store?.set({ accessToken, expiresIn, refreshToken });
          return accessToken;
        }
      }
    }
    return null;
  }

  async requestRefreshToken(refreshToken: string): Promise<ResponseCisAssessment<Authorization>> {
    const result: ResponseCisAssessment = { message: 'invalid_refresh_token', success: false };
    if (!refreshToken) return result as ResponseCisAssessment<Authorization>;

    const payload: RequestRefreshToken = {
      grantType: 'refreshToken',
      refreshToken,
    };

    try {
      const response = await axios.create({ baseURL: this.baseURL }).post(`/oauth/authorize`, payload, { headers: { Retry: true } });
      return response?.data as ResponseCisAssessment<Authorization>;
    } catch (axiosError) {
      if (axiosError instanceof AxiosError) {
        const data = axiosError?.response?.data || {};
        return {
          ...data,
          message: data?.message || 'timeout',
          success: false,
        } as ResponseCisAssessment<Authorization>;
      }
      return result as ResponseCisAssessment<Authorization>;
    }
  }

  async authenticate(email: string, password: string, grantType: GrantType, extraFields: any = {}): Promise<ResponseCisAssessment<Authorization>> {
    const payload: RequestAuthorization = {
      clientId: this.options?.clientId,
      ...payloadByGrantType[grantType],
      ...extraFields,
    };

    if (grantType === 'password') {
      payload.username = email;
      payload.password = password;
    }

    if (grantType === 'clientCredentials') {
      payload.clientId = extraFields.clientId;
      payload.clientSecret = extraFields.clientSecret;
    }

    const response = await this.axios.post(`/oauth/authorize`, { ...payload, responseType: 'refreshToken' });
    return response?.data as ResponseCisAssessment<Authorization>;
  }

  async requestCredits(): Promise<IResponseCreditSummary> {
    const response = await this.axios.get(`company/credit/summary`);
    return response?.data;
  }

  async createPassport(payload: Partial<ICreatePassport>): Promise<IResponsePassport> {
    const response = await this.axios.post(`/company/passport`, payload);
    return response?.data;
  }

  async requestPassport(passportId: number): Promise<IResponsePassport> {
    const response = await this.axios.get(`/company/passport/${passportId}`);
    return response?.data;
  }

  async paginatePassport({ page = 1, size = 10 }: IPaginateParams = {}): Promise<IResponsePaginatePassport> {
    const response = await this.axios.get(`/company/passport`, { params: { page, size } });
    return response?.data;
  }

  async sendInventoryPassport(passportId: number, payload: { name: string; email: string; language: LangType }): Promise<IResponseSendPassport> {
    const response = await this.axios.post(`/company/passport/${passportId}/inventory`, payload);
    return response?.data;
  }
}
