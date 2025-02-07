interface AppState {
	basedHeadingLevel: 1;
	currentBoardId: string | null;
}

export const appState: AppState = $state({
	basedHeadingLevel: 1,
	currentBoardId: null
});
