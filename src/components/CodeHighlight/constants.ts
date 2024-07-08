export const codeStringPost = `
  method: "POST",
    route: "/auth",
    headers: {
    "Content-Type": "application/json",
    },

    body: JSON.stringify({
    email: "string",
    password: "string",
    }),
`;

export const codeStringGet = `

	method: "GET",
	headers: {
		"Content-Type": "application/json",
	}
	expiration: Date,
	success: boolean,
	auth: baerer,
	token: "string",
	user: {
			avatar: "string",
			companyName: "string",
			email: "string",
			id: number,
			lang: "string",
			name: "string"
	}

`;

export const codeStringError = `
{
	"message":"account_credentials_not_found",
	"status":400,
	"success":false
}
`;

export const passwordGrantPayload = `
{
  "grantType": "password",
  "username": "string",
  "password": "string",
  "responseType": "refreshToken"  
}
`;

export const refreshTokenGrantPayload = `
{
  "grantType": "refreshToken",
  "refreshToken": "string"  
}
`;

export const refreshTokenResponse = `
{
  "accessToken": "string",
  "accessTokenExpirationDate": Date,
  "refreshToken": "string",
  "refreshTokenExpirationDate": Date,
  "success": boolean
}
`;

export const noResponseTypeResponse = `
{
  "accessToken": "string",
  "accessTokenExpirationDate": Date,
  "success": boolean
}
`;

export const RequestAuthorization = `

{
	"grantType": "clientCredentials",
	"clientId": "DEV_IDHmMsg1_CEvHnGb4VjNDvrg",
	"clientSecret": "DEV_IDe1b1d9e887c241ed9863198cc92b22c9",
	"responseType": "refreshToken"
}
`;
