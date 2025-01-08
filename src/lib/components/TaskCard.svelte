<script lang="ts">
	import type { Task } from '$lib/types';
	import { setContext } from 'svelte';
	import { selectedTask } from '../../stores';
	import { TASK_DETAILS_MODAL } from '$lib/utils';
	import { appState } from '../../routes/state.svelte';

	export let task: Task;

	const completedSubtasks = task.subtasks.reduce(
		(completed, subtask) => (completed += subtask.isCompleted ? 1 : 0),
		0
	);
	const totalSubtasks = task.subtasks.length;

	const handleClickOnCard = () => {
		selectedTask.set(task);
		appState.currentModal = TASK_DETAILS_MODAL;
	};
</script>

<button
	type="button"
	class="task-card rounded-md bg-white p-4 text-left drop-shadow-md"
	onclick={() => handleClickOnCard()}
>
	<h4 class="heading-m mb-2">{task.title}</h4>
	<p class="body-m text-medium-grey">
		{`${completedSubtasks} of ${totalSubtasks} subtasks`}
	</p>
</button>
