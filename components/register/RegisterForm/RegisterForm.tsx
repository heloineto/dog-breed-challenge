const RegisterForm = () => {
	return (
		<form action="#" method="POST" className="space-y-6 mt-8">
			<div>
				<label htmlFor="email" className="block text-sm font-medium text-gray-700">
					Email address
				</label>
				<div className="mt-1">
					<input
						id="email"
						name="email"
						type="email"
						autoComplete="email"
						required
						className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
					/>
				</div>
			</div>

			<div>
				<button
					type="submit"
					className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
				>
					Registrar
				</button>
			</div>
		</form>
	);
};

export default RegisterForm;
