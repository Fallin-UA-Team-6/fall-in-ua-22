<script lang="ts">
	import { mutableState, state } from '$lib/state';
	import { fire } from '$lib/firebase';

	import type { Group } from '$lib/models';
	import type { QueryDocumentSnapshot } from 'firebase/firestore';
	import { Logo, IconButton, CreateGroup } from '$lib';
	import MdClose from 'svelte-icons/md/MdClose.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const groups = getContext<Writable<Group[]>>('groups');
	const updateSidebar = getContext<(x: boolean) => void>('updateSidebar');
</script>

<div
	class="flex flex-col items-center w-16 pb-4 py-2 overflow-auto border-r border-gray-800 text-gray-500 row-span-2 bg-gray-700"
>
	<span class="lg:hidden mb-2">
		<IconButton icon={MdClose} on:click={() => updateSidebar(false)} />
	</span>
	<Logo />

	<div class="divider my-2 mx-2" />
	<div class="flex flex-col items-center flex-1">
		{#if $groups}
			{#each $groups as group}
				<div
					class="w-full flex justify-center py-2"
					class:bg-neutral-content={group.name === $state.mutable?.selectedGroup?.name}
					on:click={() => ($mutableState.selectedGroup = group)}
				>
					<img
						class="rounded-full w-2/3"
						src={group.photoUrl.toString()}
						alt={group.name}
						title={group.name}
					/>
				</div>
			{/each}
		{/if}
	</div>
	<div>
		<CreateGroup />
	</div>
</div>
