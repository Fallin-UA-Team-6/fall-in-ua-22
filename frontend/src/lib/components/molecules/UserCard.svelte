<script lang="ts">
	import TiPinOutline from 'svelte-icons/ti/TiPinOutline.svelte';
	import { slide } from 'svelte/transition';

	import { Avatar, IconButton, Map } from '$lib';

	let shown = false;
</script>

<section class="space-y-4 h-auto inline min-h-0">
	<div class="h-24 flex justify-between items-start">
		<div class="flex flex-col h-full justify-between">
			<div class="flex">
				<Avatar />
				<h2>Leeia</h2>
			</div>
			<div class="flex gap-4 items-center">
				<IconButton nomargin icon={TiPinOutline} on:click={() => (shown = !shown)} />
				<span class="text-sm">Near Lincoln, NE</span>
			</div>
		</div>
		<div class="flex flex-col gap-2 items-end justify-between h-full">
			<span class="timestamp">Last Check in:<br /> 01/04/22 @ 18:04</span>
			<span class="timestamp">Next Check in:<br /> 01/05/22 @ 00:04</span>
		</div>
	</div>
	{#if shown}
		<div class="h-60 rounded overflow-hidden" transition:slide>
			<Map coordinates={[40.78184, -96.62186]} />
		</div>
	{/if}
</section>

<style lang="postcss">
	h2 {
		@apply text-lg text-primary-content font-bold mb-0 pb-0;
	}

	section {
		@apply col-span-4 md:col-span-2 bg-gray-700 flex flex-col p-4 rounded-lg rounded;
	}

	.timestamp {
		@apply text-2xs tracking-wider;
	}
</style>
