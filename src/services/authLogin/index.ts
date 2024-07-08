import axios from "axios";
import { baseUrl } from "~/config";
import { GrantType, GrantTypePayloads } from "../CisAssessmentClient/cis-assessment-auth.dto";

const payloadByGrantType: GrantTypePayloads = {
  password: {
    grantType: "password",
    username: "",
    password: "",
    responseType: "refreshToken",
  },
  refreshToken: {
    grantType: "refreshToken",
    refreshToken: "",
  },
  clientCredentials: {
    grantType: "clientCredentials",
    clientId: "",
    clientSecret: "",
    responseType: "refreshToken",
  },
};

export function authAutentication(
  email: string | null,
  password: string | null,
  grantType: GrantType,
  extraFields: any = {},
) {
  const payload = { ...payloadByGrantType[grantType], ...extraFields };

  if (grantType === "password") {
    payload.username = email;
    payload.password = password;
  }

  if (grantType === "clientCredentials") {
    payload.clientId = extraFields.clientId;
    payload.clientSecret = extraFields.clientSecret;
  }

  return axios.post(`${baseUrl}/oauth/authorize`, payload).then((response) => response.data);
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
