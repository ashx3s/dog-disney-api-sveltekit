<script>
	export let data;
	console.log(data.disneyData.data);
	const characters = data.disneyData.data;
</script>

<header class="my-8">
	<h1>Disney API Examples</h1>
	{#each characters as character}
		<p>{character.name}</p>
	{/each}
</header>
