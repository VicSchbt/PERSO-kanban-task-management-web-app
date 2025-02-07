<script lang="ts">
	import type { PageData } from './$types';
	import TaskDetailsModal from '$lib/components/TaskDetailsModal/TaskDetailsModal.svelte';
	import { board } from '../../../../../stores';
	import { checkHeadingLevel } from '$lib/utils';
	import { appState } from '../../../../state.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	board.set(data.board);

	let selectedTask = $state(data.selectedTask);

	let showTaskDetailsModal: boolean = $state(true);
</script>

<TaskDetailsModal
	bind:showTaskDetailsModal
	task={selectedTask}
	headingLevel={checkHeadingLevel(appState.basedHeadingLevel + 1)}
/>
