<script lang="ts">
    import {goto} from "$app/navigation"
    import {onMount} from "svelte";
    import supabase from "$lib/db"

    onMount(() => {
        const user = supabase.auth.user()
        if (user) {
            goto("/app")
        } else {
            goto("/login")
        }
    })
</script>