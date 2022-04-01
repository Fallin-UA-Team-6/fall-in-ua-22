<script lang="ts" context="module">
    import supabase from '$lib/db';
    import type { AuthChangeEvent, User } from '@supabase/supabase-js';
    import { writable } from 'svelte/store';
    const user = writable<User | undefined>(supabase.auth.user());
    supabase.auth.onAuthStateChange((event: AuthChangeEvent) => {
        user.set(supabase.auth.user());
    });
</script>

{#if $user}
    <slot name="authenticated" user={$user}/>
{:else}
    <slot name="anonymous" />
{/if}