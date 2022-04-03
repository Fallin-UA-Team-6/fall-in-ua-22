<script lang="ts">
	import { GroupView } from '$lib';
	import Spinner from '$lib/components/atoms/Spinner.svelte';
	import { Group } from '$lib/models';
	import { state } from '$lib/state';
	import { getContext } from 'svelte';
	import type {Writable} from "svelte/store";

	const updateSidebar = getContext<(x: boolean) => void>('updateSidebar');

	let group: Group | undefined;
	$: {
		group = $state?.mutable.selectedGroup;
	}

	let groupStore = getContext<Writable<Group[]>>("groups")
	let groups: Group[];

	$: groups = $groupStore
</script>

<div class="flex flex-col flex-grow overflow-auto">
	<div class="grid grid-cols-4 gap-6 items-start">

		{#if $groupStore}
			{#if group}
				<GroupView {group} />
			{:else}
				You are not in any groups!
				Please create one
			{/if}
		{:else}
			<div class="col-span-4 py-16">
				<Spinner />
			</div>
		{/if}
	</div>
</div>
