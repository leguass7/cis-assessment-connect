import { client } from '..';

import type { SetStoreParams } from '../CisAssessmentClient';
import type { GrantType } from '../CisAssessmentClient/cis-assessment-auth.dto';

// const payloadByGrantType: GrantTypePayloads = {
//   clientCredentials: {
//     clientId: '',
//     clientSecret: '',
//     grantType: 'clientCredentials',
//     responseType: 'refreshToken',
//   },
//   password: {
//     grantType: 'password',
//     password: '',
//     responseType: 'refreshToken',
//     username: '',
//   },
//   refreshToken: {
//     grantType: 'refreshToken',
//     refreshToken: '',
//   },
// };

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
