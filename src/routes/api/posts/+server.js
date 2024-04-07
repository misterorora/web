// src/routes/api/posts/+server.js
import { fetchMarkdownPosts } from '$lib/utils/'; //import from library
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();		//call fetchMarkdownPosts

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);	//sort after Date
	});

	return json(sortedPosts);	//returns sorted list
};