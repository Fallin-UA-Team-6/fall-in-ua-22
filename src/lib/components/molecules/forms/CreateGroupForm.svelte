<script lang="ts">
	import { Input } from '$lib';
	import { fire } from '$lib/firebase';
	import { createEventDispatcher } from 'svelte';

	let name: string;
	// let members: string;
	let photoUrl: string;

	const dispatch = createEventDispatcher();

	async function createGroup() {
		const newGroupRef = await fire.storeModule.collection(fire.store, 'groups');
		// members: [members],
		const resp = await fire.storeModule.addDoc(newGroupRef, {
			name,
			photoUrl,
			members: [{
					user: fire.auth.currentUser.uid,
					latestCheckin: null,
					name: fire.auth.currentUser.displayName,
					avatar: fire.auth.currentUser.photoURL
				}],
			memberIds: [fire.auth.currentUser.uid]
		});

		dispatch('close', false);
	}
</script>

<form>
	<Input type="text" label="Group Name" bind:value={name} />
	<!-- <Input type="text" label="members" bind:value={members} /> -->
	<Input type="text" label="Group Picture URL" bind:value={photoUrl} />

	<hr class="divider border-t-0 my-0" />

	<div class="btn-group mx-auto">
		<!-- () => dispatch('creategroup', {name, members, photoUrl}) -->
		<button type="button" class="btn btn-outline" on:click={createGroup}> Create Group </button>
	</div>
</form>

<style lang="postcss">
	form {
		@apply flex flex-col gap-4 w-full mt-8;
	}
</style>
