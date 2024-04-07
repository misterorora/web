//javascript file to load all announcements markdown files and extract metadata

export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/announcements/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};