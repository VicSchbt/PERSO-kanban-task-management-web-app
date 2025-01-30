<script lang="ts">
	export let taskStatus: string[];
</script>

<select
	name="task-details-status"
	id="task-details-status"
	class="body-l rounded border border-[#828FA3]/25 px-4 py-2"
>
	{#each taskStatus as taskStat}
		<option class="body-l" value={taskStat}>{taskStat}</option>
	{/each}
</select>

<style lang="scss">
	#task-details-status {
		-moz-appearance: none;
		-webkit-appearance: none;
		appearance: none;
		background-image: url('/icon-chevron-down.svg');
		background-repeat: no-repeat;
		background-position: right 0.7em top 50%;
		&:active {
			background-image: url('/icon-chevron-up.svg');
		}
	}
</style>
