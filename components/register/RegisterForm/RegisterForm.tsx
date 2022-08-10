import type { FormEvent } from "react";
import { useState } from "react";
import useAuth from "../../../lib/contexts/auth/useUserContext";

const RegisterForm = () => {
	const [email, setEmail] = useState("");

	const { register } = useAuth();

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		void register(email);
	};

	return (
		<form action="#" method="POST" className="space-y-6 mt-8" onSubmit={onSubmit}>
			<div>
				<label htmlFor="email" className="block text-sm font-medium text-gray-700">
					Email address
				</label>
				<input
					id="email"
					name="email"
					type="email"
					autoComplete="email"
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					required
					className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
				/>
			</div>

			<button
				type="submit"
				className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
			>
				Registrar
			</button>
		</form>
	);
};

export default RegisterForm;
