import type { Board, Task } from '$lib/types';
import type { PageServerLoad } from '../../$types';

export const load: PageServerLoad = async ({ params }) => {
	const res = await fetch(`http://localhost:3000/boards/${params.boardId}`);
	const board = (await res.json()) as Board;

	const selectedTask = findSelectedTask(board, params.taskId);

	return {
		selectedTask
	};
};

const findSelectedTask = (board: Board, taskId: string): Task | null => {
	for (const column of board.columns) {
		for (const task of column.tasks) {
			if (task.id === taskId) return task;
		}
	}
	return null;
};
