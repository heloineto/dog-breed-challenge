import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import ImageGrid from "../components/list/ImageGrid";
import Navbar from "../components/list/Navbar";
import breeds from "../lib/constants/breeds";
import { getApi, getAuthToken } from "../lib/services/api";

const List = ({ list, breed }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<div className="min-h-full">
			<Navbar />
			<div className="py-10">
				<header>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<h1 className="text-3xl font-bold leading-tight text-gray-900">
							{breeds[breed].label}
						</h1>
						<p>{list.length} imagens</p>
					</div>
				</header>
				<main>
					<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
						<ImageGrid list={list} />
					</div>
				</main>
			</div>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps<ListResponse> = async (context) => {
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

	const breed = context.query.breed ?? "chihuahua";

	const response = await api.get<ListResponse>("/list", { params: { breed } });

	const props = response.data;

	return {
		props,
	};
};

export default List;
