import { PawPrint } from "phosphor-react";
import Spinner from "../../feedback/Spinner";

const AlreadyAuthenticated = () => {
	return (
		<main className="h-screen flex justify-center items-center">
			<div className="text-center flex flex-col items-center mb-40">
				<PawPrint className="mx-auto h-12 w-12 text-teal-500" weight="duotone" />
				<h1 className="mt-2 text-sm font-medium text-gray-900">O Usuário Autenticado</h1>
				<div className="mt-1 text-sm text-gray-500">
					<p>Você já está autenticado.</p>
					<p>Redirecionando para página inicial...</p>
				</div>
				<Spinner className="mt-4" />
			</div>
		</main>
	);
};

export default AlreadyAuthenticated;
