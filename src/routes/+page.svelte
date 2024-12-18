<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	let columns = [];
</script>

{#if columns.length}
	<p>there are some columns</p>
{:else}
	<div class="flex h-full flex-col items-center justify-center gap-6 p-4">
		<p class="heading-l text-center text-medium-grey">
			This board is empty. Create a new column to get started.
		</p>
		<Button isActive={true}>
			<img src="/icon-add-task-mobile.svg" alt="" />
			Add New Column
		</Button>
	</div>
{/if}
