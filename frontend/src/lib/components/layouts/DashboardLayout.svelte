<script lang="ts">
    import {IconBar, Header, SubNav} from "./components";
</script>

<main>
    <IconBar/>
    <Header/>
    <div class="overflow-auto bg-neutral p-6">
        <slot/>
    </div>
</main>

<style lang="postcss">
    main {
        @apply w-screen h-screen grid max-h-screen;

        grid-template-rows: theme("spacing.16") 1fr;
        grid-template-columns: theme("spacing.16") 1fr;
    }
</style>