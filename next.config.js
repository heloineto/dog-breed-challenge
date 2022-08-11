/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async redirects() {
		return [
			{
				source: "/",
				destination: "/list?breed=chihuahua",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
