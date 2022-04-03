<script lang="ts">
	import TiPinOutline from 'svelte-icons/ti/TiPinOutline.svelte';
	import { slide } from 'svelte/transition';
	import { Avatar, IconButton, Map } from '$lib';
	import { createEventDispatcher } from 'svelte';
	import type { GroupMember } from '$lib/models';

	const dispatch = createEventDispatcher();

	export let member: GroupMember;

	let shown = false;

	// function viewProfile(){
	//     console.log('view profile')
	//     dispatch('viewProfile', user)
	// }

	let time = member?.latestCheckin?.timestamp
		? new Date(member?.latestCheckin?.timestamp)
		: undefined;
</script>

<section class="space-y-4 h-auto inline min-h-0">
	<div class="h-24 flex justify-between items-start">
		<div class="flex flex-col h-full justify-between">
			<div class="flex">
				<Avatar src={member.avatar} />
				<h2>{member.name}</h2>
			</div>
			<div class="flex gap-4 items-center">
				<IconButton
					nomargin
					icon={TiPinOutline}
					on:click={() => (shown = !shown)}
					disabled={!member.latestCheckin}
				/>
				<!-- <span class="text-sm">{member}</span> -->
			</div>
		</div>
		<div class="flex flex-col gap-2 items-end justify-between h-full">
			<span class="timestamp"
				>Last Check in:<br />
				{time?.toLocaleDateString() ?? 'This user has not yet checked in'}
				{time?.toLocaleTimeString() ?? ''}</span
			>
			<!-- <span class="timestamp">Next Check in:<br/> {user.checkins.next}</span> -->
		</div>
	</div>

	{#if shown}
		<div class="h-60 rounded overflow-hidden" transition:slide>
			<Map coordinates={[member.latestCheckin.lat, member.latestCheckin.lon]} />
		</div>
	{/if}
</section>

<style lang="postcss">
	h2 {
		@apply text-lg text-neutral-content font-bold mb-0 pb-0;
	}

	section {
		@apply col-span-4 md:col-span-2 bg-gray-700 flex flex-col p-4 rounded-lg rounded;
	}

	.timestamp {
		@apply text-2xs tracking-wider;
	}
</style>
