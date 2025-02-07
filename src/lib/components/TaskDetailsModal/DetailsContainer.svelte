<script lang="ts">
	import type { Task } from '$lib/types';
	import { get } from 'svelte/store';
	import { taskStatus } from '../../../stores';
	import StatusSelect from '../StatusSelect.svelte';
	import Heading from '../common/Heading.svelte';
	import { checkHeadingLevel } from '$lib/utils';

	interface Props {
		task: Task;
		headingLevel: number;
		onEditClick: () => void;
	}

	let { task, onEditClick, headingLevel }: Props = $props();

	let isActionsMenuDisplayed = $state(false);

	// TODO: might be replace by a store or a subscribe function
	const completedSubtasks = () =>
		task
			? task.subtasks.reduce((completed, subtask) => (completed += subtask.isCompleted ? 1 : 0), 0)
			: 0;
	const totalSubtasks = () => (task ? task.subtasks.length : 0);
</script>

<div class="flex flex-col gap-4">
	<div class="flex items-center justify-between">
		<Heading headingLevel={checkHeadingLevel(headingLevel)} classStyle="heading-l flex-[3]"
			>{task.title}</Heading
		>
		<div class="relative">
			<button type="button" onclick={() => (isActionsMenuDisplayed = !isActionsMenuDisplayed)}>
				<img src="/icon-vertical-ellipsis.svg" alt="actions on task" class="h-[20px] w-[5px]" />
			</button>

			{#if isActionsMenuDisplayed}
				<ul class="absolute right-0 rounded bg-white p-2 shadow-md">
					<li><button type="button" class="w-max" onclick={onEditClick}>Edit task</button></li>
				</ul>
			{/if}
		</div>
	</div>
	<p class="body-l text-medium-grey">{task.description}</p>
	<Heading
		headingLevel={checkHeadingLevel(headingLevel + 1)}
		classStyle="text-xs font-bold text-medium-grey"
	>
		{`Subtasks (${completedSubtasks()} of ${totalSubtasks()})`}
	</Heading>
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
	<label for="task-details-status" class="text-xs font-bold text-medium-grey">Current Status</label>
	<StatusSelect taskStatus={get(taskStatus)} />
</div>
