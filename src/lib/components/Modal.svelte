<script lang="ts">
	import { NO_MODAL } from '$lib/utils';
	import { setContext, type Snippet } from 'svelte';
	import { appState } from '../../routes/state.svelte';

	interface Props {
		children: Snippet;
		showModal: boolean;
	}

	let { showModal = $bindable(), children }: Props = $props();

	let dialog: HTMLDialogElement | undefined = $state();

	$effect(() => {
		if (dialog && showModal) dialog.showModal();
	});
</script>

{#if showModal}
	<div class="absolute left-0 top-0 z-10 h-full w-full bg-black opacity-20"></div>
{/if}
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog
	bind:this={dialog}
	onclose={() => {
		appState.currentModal = NO_MODAL;
		showModal = false;
	}}
	onclick={(e) => {
		if (e.target === dialog) dialog.close();
	}}
	class=" absolute left-1/2 top-1/2 z-20 w-11/12 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-3"
>
	{@render children?.()}
	<button type="button" onclick={() => dialog?.close()}> Close </button>
</dialog>
