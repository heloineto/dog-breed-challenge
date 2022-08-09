import Image from "next/image";
import { PawPrint } from "phosphor-react";
import AlreadyAuthenticated from "../components/register/AlreadyAuthenticated";
import RegisterForm from "../components/register/RegisterForm";
import useUserContext from "../lib/user/useUserContext";

function Register() {
	const { user } = useUserContext();

	if (user) {
		return <AlreadyAuthenticated />;
	}

	return (
		<div className="h-screen flex">
			<main className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
				<div className="mx-auto w-full max-w-sm lg:w-96 mb-20">
					<header>
						<PawPrint className="h-14 w-auto text-teal-500" weight="duotone" />
						<h1 className="mt-6 text-3xl font-extrabold text-gray-900">Registre-se com um email</h1>
						<p className="mt-2 text-sm text-gray-600">
							Para ver fotos de doginhos de várias raças!
						</p>
					</header>

					<RegisterForm />
				</div>
			</main>
			<div className="hidden lg:block relative w-0 flex-1">
				<div className="absolute inset-0 h-full w-full object-cover">
					<Image
						layout="fill"
						objectFit="cover"
						src="/pug.webp"
						alt="cute pug dog on a green background wearing green clothes"
					/>
				</div>
			</div>
		</div>
	);
}

export default Register;
