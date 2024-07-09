import axios from 'axios';

import { baseUrl } from '~/config';

import type { GrantType, GrantTypePayloads } from '../CisAssessmentClient/cis-assessment-auth.dto';

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

export function authAutentication(email: string | null, password: string | null, grantType: GrantType, extraFields: any = {}) {
  const payload = { ...payloadByGrantType[grantType], ...extraFields };

  if (grantType === 'password') {
    payload.username = email;
    payload.password = password;
  }

  if (grantType === 'clientCredentials') {
    payload.clientId = extraFields.clientId;
    payload.clientSecret = extraFields.clientSecret;
  }

  return axios.post(`${baseUrl}/oauth/authorize`, payload).then(response => response.data);
}

// export function authRefreshToken(clientId: string, refreshToken: string) {
//   return fetch("https://api.example.com/auth/refresh", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       clientId,
//       refreshToken,
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => data)
//     .catch((error) => {
//       console.error("Error:", error);
//       throw error;
//     });
// }
