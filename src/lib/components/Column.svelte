<script lang="ts">
	import type { Column } from '$lib/types';
	import TaskCard from './TaskCard.svelte';

	export let column: Column;
</script>

<div class="flex flex-col gap-5">
	<h3 class="heading-s uppercase text-medium-grey">{`${column.name} (${column.tasks.length})`}</h3>
	<div class="flex flex-col gap-4">
		{#each column.tasks as task}
			<TaskCard {task} />
		{/each}
	</div>
</div>
