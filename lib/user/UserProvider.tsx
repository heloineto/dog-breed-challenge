import type { ComponentProps } from "react";
import UserContext from "./UserContext";
import useLocalStorage from "../hooks/useLocalStorage";
type Props = Omit<ComponentProps<typeof UserContext.Provider>, "value">;

const UserProvider = (props: Props) => {
	const [user, setUser] = useLocalStorage<User | null>("user", null);

	return <UserContext.Provider value={{ user, setUser }} {...props} />;
};

export default UserProvider;
