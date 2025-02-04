<script lang="ts">
	import type { Column } from '$lib/types';
	import Heading from './common/Heading.svelte';
	import TaskCard from './TaskCard.svelte';

	interface Props {
		column: Column;
		headingLevel: number;
	}

	let { column, headingLevel }: Props = $props();
</script>

<div class="flex flex-col gap-5">
	<Heading {headingLevel} classStyle="heading-s uppercase text-medium-grey"
		>{`${column.name} (${column.tasks.length})`}</Heading
	>
	<div class="flex flex-col gap-4">
		{#each column.tasks as task}
			<TaskCard {task} />
		{/each}
	</div>
</div>
