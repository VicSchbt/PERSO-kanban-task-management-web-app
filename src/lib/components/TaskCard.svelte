<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Task } from '$lib/types';
	import { buildTaskDetailUrl } from '$lib/utils';
	import { get } from 'svelte/store';
	import { board } from '../../stores';

	export let task: Task;

	const completedSubtasks = task.subtasks.reduce(
		(completed, subtask) => (completed += subtask.isCompleted ? 1 : 0),
		0
	);
	const totalSubtasks = task.subtasks.length;

	const handleClickOnCard = () => {
		goto(buildTaskDetailUrl(get(board).id, task.id), { invalidateAll: true });
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
