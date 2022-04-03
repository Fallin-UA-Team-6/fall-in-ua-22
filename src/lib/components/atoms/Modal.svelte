<script lang="ts">
	import { Portal } from '$lib/components/abstract';
	import { setContext } from 'svelte';
	import { clickOutside } from '$lib/utils';
	export let title: string;
	export let visible = false;
	export let canClickOutside = false;
	export let id: string;
	const close = (): void => {
		visible = false;
	};
	const handleClickOutside = (): void => {
		if (canClickOutside) close();
	};
	setContext('close', close);
</script>

<Portal>
	<input type="checkbox" class="modal-toggle" bind:checked={visible} />

	<div class="modal" {id} use:clickOutside={{ callback: handleClickOutside }}>
		<div class="modal-box">
			<div class="close" on:click={close}>✖</div>
			<h2>
				{title ?? ''}
			</h2>
			<slot  />
			{#if $$slots.actions}
				<div class="modal-action">
					<slot name="actions" {close} />
				</div>
			{/if}
		</div>
	</div>
</Portal>

<style lang="postcss">
	h2 {
		@apply text-primary-content font-bold;
	}
	.close {
		@apply absolute top-4 right-4 text-xl
        cursor-pointer;
	}
	h2 {
		@apply text-2xl;
	}
</style>
