<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
		classStyle: string;
	}

	let { children, headingLevel, classStyle }: Props = $props();
</script>

<svelte:element this={`h${headingLevel}`} class={classStyle}>
	{@render children?.()}
</svelte:element>
