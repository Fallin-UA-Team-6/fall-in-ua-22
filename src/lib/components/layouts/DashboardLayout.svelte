<script lang="ts">
	import { setContext } from 'svelte';

	import { IconBar, Header } from './components';

	let sidebarVisible = false;
	const updateSidebar = (v: boolean) => {
		sidebarVisible = v
	};
	setContext('updateSidebar', updateSidebar);
</script>

<main class="drawer drawer-mobile">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" bind:checked={sidebarVisible} />
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />

		<IconBar />
		
	</div>

	<section class="drawer-content flex flex-col justify-self-stretch">
		<Header />
		<div class="overflow-auto bg-neutral p-6 flex-1">
			<slot />
		</div>
	</section>
</main>

<style lang="postcss">
	main {
		@apply w-screen h-screen max-h-screen;
	}
</style>
