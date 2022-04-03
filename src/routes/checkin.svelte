<script lang="ts">
    import { fire } from "$lib/firebase";


    async function checkin() {
        const token = await fire.auth.currentUser.getIdToken()
        await fetch("/api/checkin", {
            method: "POST",
            body: JSON.stringify({
                token
            })
        }).then(r => r.text())
        
    }
</script>

<button class="btn btn-primary" on:click={checkin}>Check In</button>