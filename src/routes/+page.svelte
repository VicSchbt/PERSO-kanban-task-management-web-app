<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { get } from 'svelte/store';
	import { activeBoardIndex, boards } from '../stores';
	import Column from '$lib/components/Column.svelte';

	let columns = get(boards)[get(activeBoardIndex)].columns;
</script>

{#if columns.length}
	<div class="flex grow gap-4 overflow-x-auto p-4">
		{#each columns as column}
			<Column {column} />
		{/each}
	</div>
{:else}
	<div class="flex grow flex-col items-center justify-center gap-6 p-4">
		<p class="heading-l text-center text-medium-grey">
			This board is empty. Create a new column to get started.
		</p>
		<Button isActive={true}>
			<img src="/icon-add-task-mobile.svg" alt="" />
			Add New Column
		</Button>
	</div>
{/if}
