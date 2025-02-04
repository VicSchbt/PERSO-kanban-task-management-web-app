import type { Task } from '$lib/types';
import { NO_MODAL } from '$lib/utils';

interface AppState {
	currentModal: string;
	selectedTask: Task | null;
	basedHeadingLevel: number;
}

export const appState: AppState = $state({
	currentModal: NO_MODAL,
	selectedTask: null,
	basedHeadingLevel: 1
});
