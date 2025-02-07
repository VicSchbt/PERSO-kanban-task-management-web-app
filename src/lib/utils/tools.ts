export const checkHeadingLevel = (level: number): 1 | 2 | 3 | 4 | 5 | 6 =>
	level < 1 || level > 6 ? 6 : (level as 1 | 2 | 3 | 4 | 5 | 6);

export const buildBoardUrl = (boardId: string) => `/board/${boardId}`;

export const buildTaskDetailUrl = (boardId: string, taskId: string) =>
	`/board/${boardId}/task-details/${taskId}`;
