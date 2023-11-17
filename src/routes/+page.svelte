<script>
	let clientTitle = 'Home Page: DOG API EXAMPLE';
	export let data;
	console.log('test log:', data.dogImage.message);
	const dog = data.dogImage.message;
</script>

<header>
	<h1>{clientTitle}</h1>
	<p>{data.title}</p>
	<img src={dog} alt="" />
</header>
