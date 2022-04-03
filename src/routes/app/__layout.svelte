<script lang="ts">
	import { fire } from '$lib/firebase';

	import type { Group } from '$lib/models';
	import type { QueryDocumentSnapshot } from 'firebase/firestore';
	import { mutableState, state } from '$lib/state';

	import { DashboardLayout } from '$lib';
	import CheckInButton from '$lib/components/molecules/CheckInButton.svelte';
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';

	let groups = writable<Group[]>(undefined);
	$: if ($state?.mutable?.firestoreInitialized && $state?.mutable?.user && ($groups?.length ?? 0) === 0) {
		fetchGroups();
	}

	const fetchGroups = async () => {
		const results = await fire.storeModule.getDocs(
			fire.storeModule.query(
				fire.storeModule.collection(fire.store, 'groups'),
				fire.storeModule.where('memberIds', 'array-contains', $state.mutable.user.uid)
			)
		);

		$groups = results.docs.map((d) => {
			const data = d.data();
			return {
				...data,
				id: d.id
			};
		}) as Group[];

		$mutableState.selectedGroup = $groups?.[0];
	};
	setContext('groups', groups);
</script>

<DashboardLayout>
	<slot />
</DashboardLayout>
<CheckInButton />
