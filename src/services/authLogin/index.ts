import type { GrantType, GrantTypePayloads } from '../CisAssessmentClient/cis-assessment-auth.dto';
import { CisAssessmentClient, SetStoreParams } from '../CisAssessmentClient';

const payloadByGrantType: GrantTypePayloads = {
  clientCredentials: {
    clientId: '',
    clientSecret: '',
    grantType: 'clientCredentials',
    responseType: 'refreshToken',
  },
  password: {
    grantType: 'password',
    password: '',
    responseType: 'refreshToken',
    username: '',
  },
  refreshToken: {
    grantType: 'refreshToken',
    refreshToken: '',
  },
};

const isDevelopment = process.env.NEXT_PUBLIC_STAGING == '1' ? true : false;

const client = new CisAssessmentClient({ development: isDevelopment });

export async function authAuthentication(email: string | null, password: string | null, grantType: GrantType, extraFields: any = {}) {
  return await client.authenticate(email, password, grantType, extraFields);
}

export async function authRefreshToken(refreshToken: string) {
  return await client.requestRefreshToken(refreshToken);
}

export async function setStore(store: SetStoreParams) {
  return await client.setStore(store);
}

export async function getStore() {
  return await client.getStore();
}

export async function authLogout() {
  return await client.clearStore();
}
