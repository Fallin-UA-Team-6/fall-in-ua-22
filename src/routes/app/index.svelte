<script lang="ts">
	import { GroupView } from '$lib';
	import Spinner from '$lib/components/atoms/Spinner.svelte';
	import type { Group } from '$lib/models';
	import { state } from '$lib/state';
	import { getContext } from 'svelte';

	const updateSidebar = getContext<(x: boolean) => void>('updateSidebar');
	export let groups;
	let group: Group | undefined;
	$: group = $state?.mutable.selectedGroup;
</script>

<div class="flex flex-col flex-grow overflow-auto">
	<div class="grid grid-cols-4 gap-6 items-start">
		{#if group}
			<GroupView {group}/>
		{:else}
			<div class="col-span-4 py-16">
				<Spinner />
			</div>
			<!-- <div class="col-span-4 px-4 py-2 flex justify-center">
				<button class="btn btn-outline btn-primary" on:click={() => updateSidebar(true)}>
					Please select a group to continue...
				</button>
			</div> -->
		{/if}
	</div>
</div>
