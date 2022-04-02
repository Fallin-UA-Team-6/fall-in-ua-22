<script lang="ts" context="module">
    import { writable } from 'svelte/store';
    import {fire} from '$lib/firebase'
    import type { User } from 'firebase/auth';
    const user = writable<User | undefined>(fire.auth.currentUser);
    fire.authModule.onAuthStateChanged(fire.auth, (event) => {
        user.set(event)
    });
    
</script>

{#if $user}
    <slot name="authenticated" user={$user}/>
{:else}
    <slot name="anonymous" />
{/if}