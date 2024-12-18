<script lang="ts">
	import '../app.css';
	import Button from '$lib/components/Button.svelte';

	let activeBoardName = $state('Platform Launch');

	let { children } = $props();
</script>

<header class="flex items-center justify-between bg-white px-4 py-5">
	<div class="flex items-center gap-4">
		<img src="/logo-mobile.svg" alt="logo" />
		<h1 class="heading-l">{activeBoardName}</h1>
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
