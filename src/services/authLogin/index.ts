import axios from "axios";
import { baseUrl } from "~/config";

export function authAutentication(email: string, password: string) {
  return axios
    .post(`${baseUrl}/auth`, {
      email,
      password,
    })
    .then((response) => response.data);
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
