<script lang="ts">
import { fire } from '$lib/firebase';
import { state } from '$lib/state';

	import { onMount } from 'svelte';
    import UserCard from './UserCard.svelte';

	onMount(async () => {
        
    });

    const members = $state.mutable.selectedGroup.members
    $: console.log(members)
</script>

{#each members as member}
    <UserCard {member}/>
{/each}