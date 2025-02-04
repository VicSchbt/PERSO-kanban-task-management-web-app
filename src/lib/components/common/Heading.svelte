<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		headingLevel: number;
		classStyle: string;
	}

	let { children, headingLevel, classStyle }: Props = $props();
</script>

{#if headingLevel === 1}
	<h1 class={classStyle}>
		{@render children?.()}
	</h1>
{:else if headingLevel === 2}
	<h2 class={classStyle}>
		{@render children?.()}
	</h2>
{:else if headingLevel === 3}
	<h3 class={classStyle}>
		{@render children?.()}
	</h3>
{:else if headingLevel === 4}
	<h4 class={classStyle}>
		{@render children?.()}
	</h4>
{:else if headingLevel === 5}
	<h5 class={classStyle}>
		{@render children?.()}
	</h5>
{:else if headingLevel === 6}
	<h6 class={classStyle}>
		{@render children?.()}
	</h6>
{:else}
	<p class={classStyle}>
		{@render children?.()}
	</p>
{/if}
