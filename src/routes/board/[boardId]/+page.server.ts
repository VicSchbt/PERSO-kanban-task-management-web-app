import type { Board } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const res = await fetch(`http://localhost:3000/boards/${params.boardId}`);
	const board = (await res.json()) as Board;

	return {
		board
	};
};
