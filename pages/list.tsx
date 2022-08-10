import type { GetServerSideProps } from "next";
import { getApi, getAuthToken } from "../lib/services/api";

const List = () => {
	return <div>You must be auth to see mee</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const api = getApi(context);
	const token = getAuthToken(context);

	if (!token) {
		return {
			redirect: {
				destination: "/register",
				permanent: false,
			},
		};
	}

	const thing = await api.get("");

	return {
		props: {},
	};
};

export default List;
