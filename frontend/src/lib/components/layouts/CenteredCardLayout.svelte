<main>
    <div class="card">
        <div class="card-body bg-neutral text-neutral-content">
            <slot/>
        </div>
    </div>
</main>

<style lang="postcss">
    main {
        @apply flex flex-col items-center justify-center w-screen h-screen text-gray-700 relative
    }
</style>