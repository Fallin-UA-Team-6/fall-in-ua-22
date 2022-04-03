<button on:click>
<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke="currentColor"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
	/>
</svg>
</button>
<style lang="postcss">
    button {
		@apply flex items-center justify-center h-10 text-sm font-medium rounded hover:bg-gray-800 p-0 w-10;
	}
    svg {
        @apply w-8 h-8 stroke-current text-gray-300
    }
</style>