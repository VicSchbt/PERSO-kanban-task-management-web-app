<script lang="ts">
	import '../app.css';
	import Button from '$lib/components/Button.svelte';
	import { activeBoardIndex, boards } from '../stores';
	import { get } from 'svelte/store';

	import type { PageData } from './$types';
	import { type Snippet } from 'svelte';
	import TaskDetailsModal from '$lib/components/TaskDetailsModal.svelte';
	import { TASK_DETAILS_MODAL } from '$lib/utils';
	import { appState } from './state.svelte';

	interface Props {
		data: PageData;
		children: Snippet;
	}

	let { data, children }: Props = $props();
	boards.set(data.boards);

	let showTaskDetailsModal: boolean = $state(false);

	$effect(() => {
		if (appState.currentModal === TASK_DETAILS_MODAL) {
			showTaskDetailsModal = true;
		}
	});
</script>

<header class="sticky flex flex-none items-center justify-between bg-white px-4 py-5">
	<div class="flex items-center gap-4">
		<img src="/logo-mobile.svg" alt="logo" />
		<h1 class="heading-l">{get(boards)[get(activeBoardIndex)].name}</h1>

		<img src="/icon-chevron-down.svg" alt="open menu" />
	</div>
	<div class="flex items-center gap-4">
		<Button>
			<img src="/icon-add-task-mobile.svg" alt="add new task" />
		</Button>
		<img src="/icon-vertical-ellipsis.svg" alt="" />
	</div>
</header>
{@render children()}

<TaskDetailsModal bind:showTaskDetailsModal />
