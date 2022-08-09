import { useContext } from "react";

import UserContext from "./UserContext";

const useUserContext = () => {
	const context = useContext(UserContext);

	if (context === undefined) {
		throw new Error("UserContext is undefined. Did you call it outside a provider?");
	}

	return context;
};

export default useUserContext;
