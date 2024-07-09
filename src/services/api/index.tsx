import { CisAssessmentClient } from "../CisAssessmentClient";

const api = new CisAssessmentClient({
  clientId: "clientId",
  development: true,
  baseURL: "https://api.aws.cisassessment.com.br/api/v1",
});

export function authAutentication() {
  api.authenticate;
}
