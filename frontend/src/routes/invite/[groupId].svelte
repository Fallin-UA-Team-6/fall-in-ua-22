<script lang="ts">
	import { fire } from '$lib/firebase';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { state } from '$lib/state';
import { Avatar } from '$lib';
	// $page.params => { groupId: string }
	let mounted = false;

	$: if ($state.mutable.firestoreInitialized && mounted) {
		checkAuth();
	}
	onMount(async () => {
		mounted = true;
	});
    let group = null

	async function checkAuth() {
		console.log('checking auth');
		if ($state.mutable.user) {
			const groupCollection = await fire.storeModule.collection(fire.store, 'groups');
			const groupQuery = fire.storeModule.query(
				groupCollection,
				fire.storeModule.where('id', '==', $page.params.groupId)
			);
			console.log('checking auth');
			const foundGroup = await fire.storeModule.getDocs(groupQuery);
			if (foundGroup && foundGroup.docs && foundGroup.docs.length) {
				console.log(foundGroup);
                group = foundGroup.data()
                console.log(group)
			} else {
				goto('/');
			}
		} else {
			goto('/');
		}
	}

    async function joinGroup(){

    }
</script>

<main>
	<section class="space-y-4 h-auto inline min-h-0 ">
		<div class="h-24 flex justify-between items-start">
			<div class="flex flex-col h-full justify-between">
				<div class="flex">
					<Avatar />
					<h2>{group?.name}</h2>
                    <button type="button" class="btn btn-sm" on:click={joinGroup}
                        >Join Group</button
                    >
				</div>
			</div>
		</div>
	</section>
</main>

<style lang="postcss">
	h2 {
		@apply text-lg text-primary-content font-bold mb-0 pb-0;
	}

	section {
		@apply col-span-4 md:col-span-2 bg-gray-700 flex flex-col p-4 rounded-lg rounded;
	}

	.timestamp {
		@apply text-2xs tracking-wider;
	}
</style>
