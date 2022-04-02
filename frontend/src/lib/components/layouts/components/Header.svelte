<script lang="ts">
	import { Logo } from '$lib';
	export let sidebarVisible: boolean;
</script>

<header>
	<div class="flex gap-2 items-center">
		<span class="lg:hidden"><Logo on:click={() => sidebarVisible = true}/></span>
		<h1>Safety Ping</h1>
	</div>
	<button> Logout </button>
</header>

<style lang="postcss">
	h1 {
		@apply text-lg font-medium;
	}
	header {
		@apply flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-800;
	}
	button {
		@apply flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-800;
	}
</style>
