<script lang="ts">
	import type { Group } from '$lib/models';

	import UserCard from './UserCard.svelte';
	export let group: Group;

	async function copyInviteLink() {
		navigator.clipboard.writeText(
			`${window.location.protocol}//${window.location.host}/invite/${group.id}`
		);
	}
</script>

<div class="col-span-4 flex justify-between px-4">
	<div>
		<h2 class="font-bold text-xl">{group.name}</h2>
		<p>{group.members.length} member{group.members.length > 1 ? 's' : ''}</p>
	</div>
	<div>
		<button class="btn btn-outline" on:click={copyInviteLink}>Copy invite link</button>
	</div>
</div>
{#each group.members as member (member.latestCheckin)}
	<UserCard {member} />
{/each}
