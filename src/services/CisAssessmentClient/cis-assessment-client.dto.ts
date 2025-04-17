export type ClientOptions = {
  clientId?: string;
  development?: boolean;
  baseURL?: string;
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

export type CisAssessmentGrantType = 'clientCredentials' | 'refreshToken';

export type RequestAuthorization = {
  clientSecret: string;
  clientId?: string;
  username: string;
  password: string;
  grantType: CisAssessmentGrantType;
};

export type RequestRefreshToken = Pick<RequestAuthorization, 'clientId' | 'grantType'> & {
  refreshToken: string;
};
