import { IconButton } from "@mui/material";
import { PawPrint, SignOut } from "phosphor-react";
import useAuth from "../../../lib/contexts/auth/useUserContext";
import classNames from "../../../lib/utils/classNames";

const navigation = [
	{ name: "Chihuahua", href: "#", current: true },
	{ name: "Husky", href: "#", current: false },
	{ name: "Pug", href: "#", current: false },
	{ name: "Labrador", href: "#", current: false },
];

interface Props {}

const Navbar = (props: Props) => {
	const { signOut } = useAuth();

	return (
		<nav className="bg-white border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16">
				<div className="flex">
					<div className="flex-shrink-0 flex items-center">
						<PawPrint className="h-10 w-10 text-teal-500" weight="duotone" />
					</div>
					<div className="-my-px ml-6 flex space-x-8">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className={classNames(
									item.current
										? "border-teal-500 text-gray-900"
										: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
									"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
								)}
								aria-current={item.current ? "page" : undefined}
							>
								{item.name}
							</a>
						))}
					</div>
				</div>
				<div className="ml-9 flex items-center">
					<IconButton
						className="h-10 w-10 border-solid bg-orange-200 hover:bg-orange-300 border-2 border-orange-500 flex items-center justify-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
						onClick={signOut}
					>
						<span className="sr-only">Sign out</span>
						<SignOut className="h-6 w-6 text-orange-600 ml-0.5" weight="bold" />
					</IconButton>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
