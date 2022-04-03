<script lang="ts">
	import { goto } from '$app/navigation';

	import { Logo } from '$lib';
	import { fire } from '$lib/firebase';
	import { getContext } from 'svelte';

	const updateSidebar = getContext<(x: boolean) => void>('updateSidebar');

	async function logout() {
		await fire.authModule.signOut(fire.auth);
		goto('/login');
	}
</script>

<header>
	<div class="flex gap-2 items-center">
		<span class="lg:hidden"><Logo on:click={() => updateSidebar(true)} /></span>
		<h1>Safety Ping</h1>
	</div>
	<button on:click={logout}> Logout </button>
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
