const getChunks = <T>(array: T[], size = 10) => {
	const chunks: T[][] = [];

	for (let i = 0; i < array.length; i += size) {
		chunks.push(array.slice(i, i + size));
	}

	return chunks;
};

export default getChunks;
