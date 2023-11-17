export const load = async ({ fetch }) => {
	const response = await fetch('https://api.disneyapi.dev/character');
	const disneyData = response.json();
	console.log(disneyData);
	return { disneyData };
};
