export type Subtask = {
	title: string;
	isCompleted: boolean;
};

export type Task = {
	id: string;
	title: string;
	description: string;
	status: 'Todo' | 'Doing' | 'Done';
	subtasks: Subtask[];
};

export type Column = {
	name: string;
	tasks: Task[];
};

export type Board = {
	id: string;
	name: string;
	columns: Column[];
};
