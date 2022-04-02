<script lang="ts">
	import { writable, readable, derived } from 'svelte/store';

	const write = writable<string>('');
	function updateMyStore() {
		write.update((v) => `${v} 1`);
	}

	const read = readable(0, (set) => {
		let value = 0;
		const interval = setInterval(() => set(value++), 1000);

		return () => clearInterval(interval);
	});

	const d = derived([write, read], ([w, r]) => ({
		w,
		r
	}));
</script>

<main>
	<button on:click={updateMyStore} class="btn">Update Store</button>
</main>

<p>w: {$write}</p>
<p>r: {$read}</p>
<p>d: {JSON.stringify($d)}</p>

<style lang="postcss">
	main {
		@apply p-8;
	}
</style>
