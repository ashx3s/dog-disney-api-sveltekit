<script>
	import '../app.postcss';
</script>

<nav class="bg-black py-4 mb-8">
	<ul class="flex justify-around">
		<li><a href="/">Dog API</a></li>
		<li><a href="/disney">Disney API</a></li>
	</ul>
</nav>
<main class="ml-8">
	<slot />
</main>
