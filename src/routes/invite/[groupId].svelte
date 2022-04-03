<script lang="ts">
	import { fire } from '$lib/firebase';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { state } from '$lib/state';
	import { Avatar, CenteredCardLayout, Spinner } from '$lib';
	import type { DocumentReference } from 'firebase/firestore';
	import type { Group } from '$lib/models';

	// $page.params => { groupId: string }
	let mounted = false;

	$: if ($state.mutable.firestoreInitialized && mounted) {
		checkAuth();
	}
	onMount(async () => {
		mounted = true;
	});
	let group: null | Group = null;
	let groupRef: DocumentReference;

	async function checkAuth() {
		if ($state.mutable.user) {
			const ref = fire.storeModule.doc(fire.store, 'groups', $page.params.groupId);
			const foundGroup = await fire.storeModule.getDoc(ref);

			if (foundGroup.exists()) {
				group = foundGroup.data() as Group;

				if (group.members.some((m) => m?.user === $state?.mutable?.user?.uid)) {
					window.location.href = '/app';
				}

				groupRef = ref;
			} else {
				window.location.href = '/';
			}
		} else {
			window.location.href = '/login?next=' + encodeURI("/invite/" + $page.params.groupId);
		}
	}
	async function joinGroup() {
		await fire.storeModule.updateDoc(groupRef, {
			...group,
			members: [
				...group.members,
				{
					user: fire.auth.currentUser.uid,
					latestCheckin: null,
					name: fire.auth.currentUser.displayName,
					avatar: fire.auth.currentUser.photoURL
				}
			],
			memberIds: [
				...group.memberIds,
				fire.auth.currentUser.uid
			]
		});
		window.location.href = "/app"
	}
</script>

<CenteredCardLayout>
	{#if group}
		<div
			class="rounded-lg w-44 h-44 mb-2 bg-center bg-contain"
			style="background-image: url('{group.photoUrl}')"
		/>
		<h2>{group?.name}</h2>
		<div class="divider" />
		<button type="button" class="btn btn-primary btn-lg" on:click={joinGroup}>Join Group</button>
	{:else}
		<Spinner />
	{/if}
</CenteredCardLayout>

<style lang="postcss">
	h2 {
		@apply text-2xl text-primary font-bold mb-0 pb-0;
	}

	section {
		@apply col-span-4 md:col-span-2 bg-gray-700 flex flex-col p-4 rounded-lg;
	}
</style>
