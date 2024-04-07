// src/routes/announcements/[slug]/+page.js, loads all md. pages inside ../ and returns content, tile and date
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date
	};
}