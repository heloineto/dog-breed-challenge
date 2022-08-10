import { useContext } from "react";

import AuthContext from "./AuthContext";

const useAuth = () => {
	const context = useContext(AuthContext);

	if (context === undefined) {
		throw new Error("AuthContext is undefined. Did you call it outside a provider?");
	}

	return context;
};

export default useAuth;
