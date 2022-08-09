import type { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

const UserContext = createContext<
	{ user: User | null; setUser: Dispatch<SetStateAction<User | null>> } | undefined
>(undefined);

export default UserContext;
