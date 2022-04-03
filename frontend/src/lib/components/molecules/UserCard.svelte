<script lang="ts">
    import TiPinOutline from 'svelte-icons/ti/TiPinOutline.svelte'
    import {slide} from "svelte/transition"
    import {Avatar, IconButton, Map} from "$lib"
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    export let user;

    let shown = false;

    function viewProfile(){
        console.log('view profile')
        dispatch('viewProfile', user)


    }
</script>

<section class="space-y-4 h-auto inline min-h-0 " on:click={viewProfile}>
    <div class="h-24 flex justify-between items-start">
        <div class="flex flex-col h-full justify-between">
            <div class="flex">
                <Avatar/>
                <h2>{
                    user.name
                }</h2>
            </div>
            <div class="flex gap-4 items-center">
                <IconButton nomargin icon={TiPinOutline} on:click={() => shown = !shown}/>
                <span class="text-sm">{user.location}</span>
            </div>
        </div>
        <div class="flex flex-col gap-2 items-end justify-between h-full">
            <span class="timestamp">Last Check in:<br/> {user.checkins.last}</span>
            <span class="timestamp">Next Check in:<br/> {user.checkins.next}</span>
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
        @apply text-lg text-primary-content font-bold mb-0 pb-0;
    }

    section {
        @apply col-span-4;
        md:col-span-2 bg-gray-700 flex flex-col p-4 rounded-lg rounded;
    }

    .timestamp {
        @apply text-2xs tracking-wider;
    }


</style>
