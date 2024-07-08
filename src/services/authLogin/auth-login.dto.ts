type PasswordGrantPayload = {
  grantType: "password";
  username: string;
  password: string;
  responseType: "refreshToken";
};

type RefreshTokenGrantPayload = {
  grantType: "refreshToken";
  refreshToken: string;
};

type ClientCredentialsGrantPayload = {
  grantType: "clientCredentials";
  clientId: string;
  clientSecret: string;
  responseType: "refreshToken";
};

type GrantTypePayloads = {
  password: PasswordGrantPayload;
  refreshToken: RefreshTokenGrantPayload;
  clientCredentials: ClientCredentialsGrantPayload;
};

type GrantType = keyof GrantTypePayloads;
