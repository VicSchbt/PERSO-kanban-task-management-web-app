<script lang="ts">
	import type { Task } from '$lib/types';
	import Modal from './Modal.svelte';
	import { appState } from '../../routes/state.svelte';

	interface Props {
		showTaskDetailsModal: boolean;
	}

	let { showTaskDetailsModal = $bindable() }: Props = $props();

	let task: Task | null = $derived(appState.selectedTask);

	const completedSubtasks = () =>
		task
			? task.subtasks.reduce((completed, subtask) => (completed += subtask.isCompleted ? 1 : 0), 0)
			: 0;
	const totalSubtasks = () => (task ? task.subtasks.length : 0);

	const onModalClose = () => {
		appState.selectedTask = null;
	};
</script>

<Modal bind:showModal={showTaskDetailsModal} {onModalClose}>
	{#if task}
		<div class="flex flex-col gap-4">
			<h4 class="heading-l">{task.title}</h4>
			<p class="body-l text-medium-grey">{task.description}</p>
			<h5 class="bold text-xs text-medium-grey">
				{`Subtasks (${completedSubtasks()} of ${totalSubtasks()})`}
			</h5>
			<div class="flex flex-col gap-2">
				{#each task.subtasks as subtask}
					<div class="flex gap-2 rounded bg-light-grey p-2">
						<input
							type="checkbox"
							name={subtask.title}
							id={subtask.title}
							checked={subtask.isCompleted}
						/>
						<label
							for={subtask.title}
							class={`bold text-xs text-black ${subtask.isCompleted ? 'line-through opacity-50' : ''}`}
							class:line-through={subtask.isCompleted}>{subtask.title}</label
						>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</Modal>
