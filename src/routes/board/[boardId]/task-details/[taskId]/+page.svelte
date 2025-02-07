<script lang="ts">
	import type { PageData } from './$types';
	import TaskDetailsModal from '$lib/components/TaskDetailsModal.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let selectedTask = $state(data.selectedTask);

	let showTaskDetailsModal: boolean = $state(true);
</script>

<TaskDetailsModal bind:showTaskDetailsModal task={selectedTask} />
