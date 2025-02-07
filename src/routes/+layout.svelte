<script lang="ts">
	import '../app.css';
	import Button from '$lib/components/common/Button.svelte';
	import { activeBoardIndex, boards } from '../stores';
	import { get } from 'svelte/store';

	import type { PageData } from './$types';
	import { type Snippet } from 'svelte';
	import { appState } from './state.svelte';
	import Heading from '$lib/components/common/Heading.svelte';

	interface Props {
		data: PageData;
		children: Snippet;
	}

	let { data, children }: Props = $props();
	boards.set(data.boards);
</script>

<header class="sticky flex flex-none items-center justify-between bg-white px-4 py-5">
	<div class="flex items-center gap-4">
		<img src="/logo-mobile.svg" alt="logo" />
		<Heading headingLevel={appState.basedHeadingLevel} classStyle="heading-l"
			>{get(boards)[get(activeBoardIndex)].name}</Heading
		>

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
