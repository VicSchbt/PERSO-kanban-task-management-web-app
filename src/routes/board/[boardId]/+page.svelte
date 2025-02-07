<script lang="ts">
	import Column from '$lib/components/Column.svelte';
	import Button from '$lib/components/common/Button.svelte';
	import type { Snippet } from 'svelte';

	import { board } from '../../../stores';
	import { appState } from '../../state.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
		children: Snippet;
	}

	let { data, children }: Props = $props();

	board.set(data.board);

	let columns = data.board.columns;

	let headingLevel = $state(appState.basedHeadingLevel + 1);
</script>

{#if columns.length}
	<div class="flex grow gap-4 overflow-x-auto p-4">
		{#each columns as column}
			<Column {column} {headingLevel} />
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

{@render children?.()}
