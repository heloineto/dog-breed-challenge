import { createContext } from "react";

const AuthContext = createContext<
	| {
			authToken: string | null;
			register: (email: string) => Promise<void>;
			isAuthenticated: boolean;
	  }
	| undefined
>(undefined);

export default AuthContext;
