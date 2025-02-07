<script lang="ts">
	import type { Task } from '$lib/types';
	import Modal from './Modal.svelte';
	import { get } from 'svelte/store';
	import { board, taskStatus } from '../../stores';
	import StatusSelect from './StatusSelect.svelte';
	import { goto } from '$app/navigation';
	import { buildBoardUrl } from '$lib/utils';

	interface Props {
		showTaskDetailsModal: boolean;
		task: Task | null;
	}

	let { showTaskDetailsModal = $bindable(), task }: Props = $props();

	// TODO: might be replace by a store or a subscribe function
	const completedSubtasks = () =>
		task
			? task.subtasks.reduce((completed, subtask) => (completed += subtask.isCompleted ? 1 : 0), 0)
			: 0;
	const totalSubtasks = () => (task ? task.subtasks.length : 0);

	const onModalClose = () => {
		goto(buildBoardUrl(get(board).id));
	};
</script>

<Modal bind:showModal={showTaskDetailsModal} {onModalClose}>
	{#if task}
		<div class="flex flex-col gap-4">
			<h4 class="heading-l">{task.title}</h4>
			<p class="body-l text-medium-grey">{task.description}</p>
			<h5 class="text-xs font-bold text-medium-grey">
				{`Subtasks (${completedSubtasks()} of ${totalSubtasks()})`}
			</h5>
			<div class="flex flex-col gap-2">
				{#each task.subtasks as subtask}
					<div class="flex gap-2 rounded bg-light-grey p-2">
						<!-- TODO: Change style of the checkbox -->
						<input
							type="checkbox"
							name={subtask.title}
							id={subtask.title}
							checked={subtask.isCompleted}
							onchange={() => (subtask.isCompleted = !subtask.isCompleted)}
						/>
						<label
							for={subtask.title}
							class={`text-xs font-bold text-black ${subtask.isCompleted ? 'line-through opacity-50' : ''}`}
							class:line-through={subtask.isCompleted}>{subtask.title}</label
						>
					</div>
				{/each}
			</div>
			<label for="task-details-status" class="text-xs font-bold text-medium-grey"
				>Current Status</label
			>
			<StatusSelect taskStatus={get(taskStatus)} />
		</div>
	{/if}
</Modal>
