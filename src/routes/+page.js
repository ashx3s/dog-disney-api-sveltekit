// pass fetch as a parameter to use sveltekit's special fetch
export const load = async ({ fetch }) => {
	const title = 'This is the Title from Server';
	// if you don't pass fetch into the parameter, this fetch is using window.fetch()
	const response = await fetch('https://dog.ceo/api/breed/akita/images/random');
	const dogImage = await response.json();
	return { title, dogImage };
};
