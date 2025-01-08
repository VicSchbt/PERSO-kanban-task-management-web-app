import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('http://localhost:3000/boards');
	const json = await res.json();
	return {
		boards: json
	};
};
