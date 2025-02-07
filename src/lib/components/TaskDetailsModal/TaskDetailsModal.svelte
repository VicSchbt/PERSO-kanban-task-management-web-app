<script lang="ts">
	import type { Task } from '$lib/types';
	import Modal from '../Modal.svelte';
	import { get } from 'svelte/store';
	import { board } from '../../../stores';
	import { goto } from '$app/navigation';
	import { buildBoardUrl } from '$lib/utils';
	import DetailsContainer from './DetailsContainer.svelte';
	import EditContainer from './EditContainer.svelte';
	import DeleteContainer from './DeleteContainer.svelte';

	const DETAILS_VIEW = 'details_view';
	const EDIT_VIEW = 'edit_view';
	const DELETE_VIEW = 'delete_view';

	interface Props {
		showTaskDetailsModal: boolean;
		task: Task | null;
		headingLevel: number;
	}

	let { showTaskDetailsModal = $bindable(), task, headingLevel }: Props = $props();

	let view = $state(DETAILS_VIEW);

	const onModalClose = () => {
		goto(buildBoardUrl(get(board).id));
	};
</script>

<Modal bind:showModal={showTaskDetailsModal} {onModalClose}>
	{#if task}
		{#if view === EDIT_VIEW}
			<EditContainer {task} />
		{:else if view === DELETE_VIEW}
			<DeleteContainer />
		{:else}
			<DetailsContainer {task} onEditClick={() => (view = EDIT_VIEW)} {headingLevel} />
		{/if}
	{/if}
</Modal>
