<script lang="ts">
	import type { Task } from '$lib/types';
	import { checkHeadingLevel } from '$lib/utils';
	import Heading from '../common/Heading.svelte';

	interface Props {
		task: Task;
		headingLevel: number;
	}

	let { task, headingLevel }: Props = $props();
</script>

<div class="flex flex-col gap-4">
	<Heading headingLevel={checkHeadingLevel(headingLevel)} classStyle="heading-l">Edit Task</Heading>
	<div class="flex flex-col gap-2">
		<label for="task-title" class="text-xs font-bold text-medium-grey">Title</label>
		<input type="text" name="task-title" id="task-title" bind:value={task.title} />
	</div>
	<div class="flex flex-col gap-2">
		<label for="task-desc" class="text-xs font-bold text-medium-grey">Description</label>
		<textarea name="task-desc" id="task-desc" bind:value={task.description}></textarea>
	</div>
</div>
