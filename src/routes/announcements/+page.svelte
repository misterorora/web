<!-- src/routes/blog/+page.svelte -->
<script>
	export let data;
</script>

<h1>Ankündigungen</h1>

<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			Published {post.meta.date}
		</li>
	{/each}
</ul>

<style>
    /* Styles for the h1 element */
    h1 {
        font-size: 24px;
        color: #333;
        margin-bottom: 20px;
    }

    /* Styles for the list items */
    li {
        margin-bottom: 10px;
    }

    /* Styles for the links */
    a {
        text-decoration: none;
        color: #007bff; /* blue color */
    }

    /* Styles for the published date */
    .published-date {
        font-style: italic;
        color: #888;
    }
</style>