<script lang="ts">
    import TiPinOutline from 'svelte-icons/ti/TiPinOutline.svelte'
    import {slide} from "svelte/transition"

    import {Avatar, IconButton, Map} from "$lib"

    let shown = false;
</script>

<section class="space-y-4 h-auto inline min-h-0">
    <div class="h-20 flex justify-between items-start">
        <div class="flex">
            <Avatar/>
            <h2>Leeia</h2>
        </div>
        <div class="flex flex-col gap-2 items-end justify-between h-full">
            <span class="timestamp">Last Check in: 01/04/22 @ 18:04</span>
            <span class="timestamp">Next Check in: 01/05/22 @ 00:04</span>
            <IconButton nomargin icon={TiPinOutline} on:click={() => shown = !shown}/>
        </div>
    </div>
    {#if shown}
        <div class="h-60 rounded overflow-hidden" transition:slide>
            <Map coordinates={[40.781840, -96.621860]}/>
        </div>
    {/if}
</section>

<style lang="postcss">
    h2 {
        @apply text-lg text-primary-content font-bold mb-0 pb-0
    }

    section {
        @apply col-span-4 md:col-span-2 bg-gray-700 flex flex-col p-4 rounded-lg rounded
    }

    .timestamp {
        @apply text-xs tracking-wider;
    }


</style>
