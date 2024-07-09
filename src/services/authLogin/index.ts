import type { GrantTypePayloads } from '../CisAssessmentClient/cis-assessment-auth.dto';

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
