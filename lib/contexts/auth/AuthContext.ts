import { createContext } from "react";

const AuthContext = createContext<
	| {
			authToken: string | null;
			signIn: (email: string) => Promise<void>;
			signOut: () => Promise<void>;
			isAuthenticated: boolean;
	  }
	| undefined
>(undefined);

export default AuthContext;
