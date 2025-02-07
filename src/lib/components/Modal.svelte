<script lang="ts">
	import { type Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		showModal: boolean;
		onModalClose: () => void;
	}

	let { showModal = $bindable(), children, onModalClose }: Props = $props();

	let dialog: HTMLDialogElement | undefined = $state();

	$effect(() => {
		if (dialog && showModal) dialog.showModal();
	});

	const handleClose = () => {
		onModalClose();
		showModal = false;
	};
</script>

{#if showModal}
	<div class="absolute left-0 top-0 z-10 h-full w-full bg-black opacity-20"></div>
{/if}
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog
	bind:this={dialog}
	onclose={handleClose}
	onclick={(e) => {
		if (e.target === dialog) dialog.close();
	}}
	class=" absolute left-1/2 top-1/2 z-20 w-11/12 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6"
>
	{@render children?.()}
</dialog>
