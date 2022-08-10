import { Button } from "@mui/material";
import { TextField } from "mui-rff";
import { useSnackbar } from "notistack";
import { Form } from "react-final-form";
import useAuth from "../../../lib/contexts/auth/useUserContext";
import emailRegex from "./utils/emailRegex";
interface Values {
	email: string;
}

const RegisterForm = () => {
	const { enqueueSnackbar } = useSnackbar();
	const { signIn } = useAuth();

	const onSubmit = ({ email }: Values) => {
		void signIn(email).catch((error) => {
			if (process.env.NODE_ENV === "development") {
				console.error(error);
			}

			enqueueSnackbar("Ocorreu um erro.", { variant: "error" });
		});
	};

	return (
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit, submitting }) => (
				<form className="space-y-6 mt-8" onSubmit={handleSubmit}>
					<TextField
						name="email"
						label="Email"
						size="small"
						InputProps={{ className: "rounded-md !shadow-sm text-sm h-10" }}
						fieldProps={{ validate: validateEmail }}
					/>

					<Button
						disabled={submitting}
						className="shadow-sm hover:shadow-lg hover:shadow-teal-600/50 text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
						variant="contained"
						color="primary"
						type="submit"
					>
						Registrar
					</Button>
				</form>
			)}
		/>
	);
};

export default RegisterForm;

const validateEmail = (email: string | undefined) => {
	if (typeof email !== "string") return "Forneça um email";

	if (!emailRegex.test(email)) return "Email inválido";

	return undefined;
};
