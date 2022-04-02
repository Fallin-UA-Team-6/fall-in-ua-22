<script lang="ts">
	import { state } from '$lib/state';
	import { fire } from '$lib/firebase';

	import type { Group } from '$lib/models';
	import type { QueryDocumentSnapshot } from 'firebase/firestore';
	import { Logo, IconButton } from '$lib';
	import MdClose from 'svelte-icons/md/MdClose.svelte';

	export let sidebarVisible: boolean;

	let groups: QueryDocumentSnapshot<Group>[] = [];
	$: if ($state?.mutable?.firestoreInitialized && $state?.user) {
		fetchGroups();
	}

	const fetchGroups = async () => {
		const groupCollection = fire.storeModule.collection(fire.store, 'groups');
		const groupQuery = fire.storeModule.query<Group>(
			groupCollection,
			fire.storeModule.where('members', 'array-contains', $state.user.uid)
		);
		const results = await fire.storeModule.getDocs<Group>(groupQuery);

		groups = results.docs;
	};
</script>

<div
	class="flex flex-col items-center w-16 pb-4 py-2 overflow-auto border-r border-gray-800 text-gray-500 row-span-2 bg-gray-700"
>
	<span class="lg:hidden mb-2">
		<IconButton icon={MdClose} on:click={() => sidebarVisible = false}/>
	</span>
	<Logo />

	<div class="divider my-0 mx-2" />
	{#each groups as group}
		{group.name}
	{/each}
</div>
