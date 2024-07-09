export type PasswordGrantPayload = {
  grantType: "password";
  username: string;
  password: string;
  responseType?: "refreshToken";
};

export type RefreshTokenGrantPayload = {
  grantType: "refreshToken";
  refreshToken: string;
};

export type ClientCredentialsGrantPayload = {
  grantType: "clientCredentials";
  clientId: string;
  clientSecret: string;
  responseType?: "refreshToken";
};

export type GrantTypePayloads = {
  password: PasswordGrantPayload;
  refreshToken: RefreshTokenGrantPayload;
  clientCredentials: ClientCredentialsGrantPayload;
};

export type GrantType = keyof GrantTypePayloads;

export const payloadByGrantType: GrantTypePayloads = {
  password: {
    grantType: "password",
    username: "",
    password: "",
  },
  refreshToken: {
    grantType: "refreshToken",
    refreshToken: "",
  },
  clientCredentials: {
    grantType: "clientCredentials",
    clientId: "",
    clientSecret: "",
  },
};
