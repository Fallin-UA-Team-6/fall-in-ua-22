<script lang="ts">
	import TiPin from 'svelte-icons/ti/TiPin.svelte';
	import { Portal } from '$lib/components/abstract';
	import { fire } from '$lib/firebase';
	import type { CheckIn, Group } from '$lib/models';
	import type { CollectionReference } from 'firebase/firestore';
	import { mutableState, state } from '$lib/state';

	async function checkIn() {
		//TODO: Get all groups
		const position: GeolocationPosition = await new Promise((resolve, reject) =>
			navigator.geolocation.getCurrentPosition(resolve, reject)
		);

		const checkin: Omit<CheckIn, 'id'> = {
			timestamp: new Date(position.timestamp).toISOString(),
			lat: position.coords.latitude,
			lon: position.coords.longitude
		};

		const userGroups = await fire.storeModule.getDocs<Group>(
			fire.storeModule.query(
				fire.storeModule.collection(fire.store, 'groups') as CollectionReference<Group>,
				fire.storeModule.where('memberIds', 'array-contains', $state.mutable.user.uid)
			)
		);
		const c = await Promise.all([
			fire.auth.currentUser.getIdToken().then((token) =>
				fetch('/api/checkin', {
					method: 'POST',
					body: JSON.stringify({
						token
					})
				}).then((r) => r.text())
			),
			...userGroups.docs.map(async (group) => {
				const d = group.data();
				await fire.storeModule.updateDoc(group.ref, {
					...d,
					members: [
						...d.members.filter((m) => m.user !== fire.auth.currentUser.uid),
						// While find may be more applicable, this results in a directly opposing
						// subset of d.members, which makes me _feel_ like we won't lose data here...
						...d.members
							.filter((m) => m.user === fire.auth.currentUser.uid)
							.map((m) => ({ ...m, latestCheckin: checkin }))
					]
				});
				return '✅';
			})
		]);
		console.log(c);
		alert('You have checked in!');
		if ($state.mutable.selectedGroup) {
			const m = $state.mutable.selectedGroup.members;
			console.log(m);
			$mutableState.selectedGroup.members = m.map((_) => {
				if (_.user === fire.auth.currentUser.uid) {
					console.log('We do be out here');
					_.latestCheckin = { id: _.latestCheckin.id, ...checkin };
				}
				return _;
			});
		}
		// window.location.reload()
	}
</script>

<Portal>
	<div
		class="tooltip tooltip-primary absolute bottom-8 right-8 z-1000 h-16 w-16"
		data-tip="Check In"
	>
		<button class="btn btn-lg btn-primary rounded-full w-full h-full" on:click={checkIn}>
			<span class="h-8 w-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<TiPin />
			</span>
		</button>
	</div>
</Portal>
