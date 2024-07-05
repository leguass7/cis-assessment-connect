import { baseUrl } from "~/config";

export async function authAutentication(email: string, password: string) {
  const response = await fetch(`${baseUrl}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();
  return data;
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
