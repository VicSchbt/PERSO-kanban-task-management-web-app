<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		isActive: boolean;
		children: Snippet;
	}

	let { isActive = false, children }: Props = $props();
</script>

<button
	class:bg-main-purple={isActive}
	class="heading-m flex items-center gap-3 rounded-full bg-main-purple-hover px-5 py-3 text-white"
>
	{@render children?.()}
</button>
