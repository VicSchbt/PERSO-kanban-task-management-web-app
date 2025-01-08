<script lang="ts">
	import type { Task } from '$lib/types';
	import Modal from './Modal.svelte';
	import { selectedTask } from '../../stores';
	import { get } from 'svelte/store';

	interface Props {
		showTaskDetailsModal: boolean;
	}

	let { showTaskDetailsModal = $bindable() }: Props = $props();

	let task: Task | null = get(selectedTask);

	const completedSubtasks = task
		? task.subtasks.reduce((completed, subtask) => (completed += subtask.isCompleted ? 1 : 0), 0)
		: 0;
	const totalSubtasks = task ? task.subtasks.length : 0;
</script>

<Modal bind:showModal={showTaskDetailsModal}>
	{#if task}
		<h4>{task.title}</h4>
		<p>{task.description}</p>
		<h5>{`Subtasks (${completedSubtasks} of ${totalSubtasks})`}</h5>
	{/if}
</Modal>
