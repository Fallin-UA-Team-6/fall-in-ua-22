<script lang="ts">
    import TiPinOutline from 'svelte-icons/ti/TiPinOutline.svelte'
    import {Avatar, IconButton} from "$lib"

    let shown = false;
    export let user;

    $: show = 'display: block';
    
    console.log('show Profile');
    
</script>

<div class="" style="{user ? show : null}">
    <div class="dmodal-content">
        <div class="flex">
            <Avatar/>
            {user}
        </div>
        <div class="flex flex-col gap-2 items-end justify-between h-full">
            <span class="timestamp">Last Check in: 01/04/22 @ 18:04</span>
            <span class="timestamp">Next Check in: 01/05/22 @ 00:04</span>
            <IconButton nomargin icon={TiPinOutline} on:click={() => shown = !shown}/>
        </div>
    </div>
</div>

<style lang="postcss">
    
    .dmodal {
        display: none;
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }
    .dmodal-content{
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }
    h2 {
        @apply text-lg text-primary-content font-bold mb-0 pb-0;
    }

    section {
        @apply col-span-4 md:col-span-2 bg-gray-700 flex flex-col p-4 rounded-lg rounded
    }

    .timestamp {
        @apply text-xs tracking-wider;
    }


</style>
