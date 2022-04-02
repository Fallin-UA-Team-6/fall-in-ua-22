<script lang="ts">
    import {SvelteComponent} from "svelte";

    export let icon: SvelteComponent
</script>


<button class="" on:click>
    <span class="h-5 w-5">
        <svelte:component this={icon}/>
    </span>
</button>

<style lang="postcss">
    button {
        @apply flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-800;
    }
</style>