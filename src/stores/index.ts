import type { Board, Task } from '$lib/types';
import { writable, derived, type Writable } from 'svelte/store';

export const boards: Writable<Board[]> = writable([]);

export const activeBoardIndex = derived(boards, ($boards) => ($boards.length > 0 ? 0 : -1));

export const selectedTask: Writable<Task | null> = writable(null);
