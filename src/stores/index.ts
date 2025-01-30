import type { Board } from '$lib/types';
import { writable, derived, type Writable } from 'svelte/store';

export const boards: Writable<Board[]> = writable([]);

export const activeBoardIndex = derived(boards, ($boards) => ($boards.length > 0 ? 0 : -1));

export const taskStatus = derived([boards, activeBoardIndex], ([$boards, $activeBoardIndex]) => {
	return $activeBoardIndex < 0 ? [] : $boards[$activeBoardIndex].columns.map((col) => col.name);
});
