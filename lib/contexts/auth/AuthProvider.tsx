import Router from "next/router";
import { destroyCookie, setCookie } from "nookies";
import type { ReactNode } from "react";
import { useState } from "react";
import api, { AUTH_TOKEN_NAME } from "../../services/api";
import UserContext from "./AuthContext";

interface Props {
	children: ReactNode;
}

const AuthProvider = (props: Props) => {
	const [authToken, setAuthToken] = useState<string | null>(null);
	const isAuthenticated = !!authToken;

	const signIn = async (email: string) => {
		const response = await api.post<RegisterResponse>(
			"/register",
			{ email },
			{ headers: { "Content-Type": "application/json" } }
		);

		const { token } = response.data.user;

		setCookie(undefined, AUTH_TOKEN_NAME, token, {
			maxAge: 60 * 60 * 1,
		});

		setAuthToken(token);

		api.defaults.headers.common.Authorization = token;

		await Router.push({
			pathname: "/list",
			query: { breed: "chihuahua" },
		});
	};

	const signOut = async () => {
		destroyCookie(undefined, AUTH_TOKEN_NAME);

		setAuthToken(null);

		delete api.defaults.headers.common.Authorization;

		await Router.push("/register");
	};

	return (
		<UserContext.Provider value={{ authToken, isAuthenticated, signIn, signOut }} {...props} />
	);
};

export default AuthProvider;
