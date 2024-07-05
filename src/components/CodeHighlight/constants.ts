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
