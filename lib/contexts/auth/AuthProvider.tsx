import Router from "next/router";
import { setCookie } from "nookies";
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

	const register = async (email: string) => {
		console.log("register");

		const {
			data: { token },
		} = await api.post<User>("/register", {
			body: JSON.stringify({ email }),
			headers: { "Content-Type": "application/json" },
		});

		setCookie(undefined, AUTH_TOKEN_NAME, token, {
			maxAge: 60 * 60 * 1,
		});

		setAuthToken(token);

		void Router.push("/list");
	};

	return <UserContext.Provider value={{ authToken, isAuthenticated, register }} {...props} />;
};

export default AuthProvider;
