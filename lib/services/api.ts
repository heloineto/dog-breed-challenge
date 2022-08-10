import axios from "axios";
import type { NextApiRequest, NextPageContext } from "next";
import { parseCookies } from "nookies";

type Context = Pick<NextPageContext, "req"> | { req: NextApiRequest } | null | undefined;

export const AUTH_TOKEN_NAME = "dog-breed-token";

export const getApi = (context?: Context) => {
	const authToken = getAuthToken(context);

	const api = axios.create({
		baseURL: "https://dogbreed-api.q9.com.br",
	});

	if (authToken) {
		api.defaults.headers.common.Authorization = `Bearer ${authToken}`;
	}

	return api;
};

export const getAuthToken = (context?: Context) => {
	const { [AUTH_TOKEN_NAME]: authToken } = parseCookies(context);

	return authToken;
};

const api = getApi();

export default api;
