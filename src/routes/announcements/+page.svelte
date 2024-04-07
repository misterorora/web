<!-- src/routes/announcements/+page.svelte -->
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
    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }
    h1 {
        font-size: 36px;
        color: #333;
        margin-bottom: 20px;
        text-align: center;
    }
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    li {
        margin-bottom: 20px;
        background-color: #f9f9f9;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    a {
        text-decoration: none;
        color: #007bff;
    }
    .date {
        font-size: 14px;
        color: #777;
    }
</style>