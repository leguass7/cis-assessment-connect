export type ClientOptions = {
  clientId: string;
  development?: boolean;
};

export type ResponseCisAssessment<Payload = Record<string, any>> = Payload & {
  success: boolean;
  message?: string;
};

export type Authorization = {
  accessToken: string;
  refreshToken: string;
  expiresIn?: number;
};

export type CisAssessmentGrantType = "client_credentials" | "refresh_token";

export type RequestAuthorization = {
  clientId: string;
  username: string;
  password: string;
  grantType: CisAssessmentGrantType;
};

export type RequestRefreshToken = Pick<RequestAuthorization, "clientId" | "grantType">;
