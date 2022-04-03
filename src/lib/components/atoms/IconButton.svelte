<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	export let icon: SvelteComponent;
	export let nomargin: boolean | undefined;
	export let disabled: boolean = false;
</script>

<button on:click class:nomargin {disabled} class:btn-disabled={disabled}>
	<span class="h-5 w-5">
		<svelte:component this={icon} />
	</span>
</button>

<style lang="postcss">
	button {
		@apply flex items-center justify-center flex-shrink-0 w-10 h-10 rounded hover:bg-gray-800;

		&.nomargin {
			@apply mt-0;
		}
	}
</style>
