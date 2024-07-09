import { CisAssessmentClient } from '../CisAssessmentClient';

const api = new CisAssessmentClient({
  baseURL: 'https://api.aws.cisassessment.com.br/api/v1',
  clientId: 'clientId',
  development: true,
});

export function authAutentication() {
  api.authenticate;
}
