export type PasswordGrantPayload = {
  grantType: 'password';
  username: string;
  password: string;
  responseType?: 'refreshToken';
};

export type RefreshTokenGrantPayload = {
  grantType: 'refreshToken';
  refreshToken: string;
};

export type ClientCredentialsGrantPayload = {
  grantType: 'clientCredentials';
  clientId: string;
  clientSecret: string;
  responseType?: 'refreshToken';
};

export type GrantTypePayloads = {
  password: PasswordGrantPayload
  refreshToken: RefreshTokenGrantPayload
  clientCredentials: ClientCredentialsGrantPayload
}

export type GrantType = keyof GrantTypePayloads

export const payloadByGrantType: GrantTypePayloads = {
  clientCredentials: {
    clientId: '',
    clientSecret: '',
    grantType: 'clientCredentials',
  },
  password: {
    grantType: 'password',
    password: '',
    username: '',
  },
  refreshToken: {
    grantType: 'refreshToken',
    refreshToken: '',
  },
};
