<script lang="ts" context="module">
	import 'class-validator';
	import type { FbApp } from '$lib/firebase';
	import { browser } from '$app/env';
	export async function load() {
		const fb: FbApp = await import('$lib/firebase').then((fb) => fb.fire);
		await fb.initialize();
		if (browser) {
			await fb.initializeMessaging();
		}
		return { props: { fb } };
	}
</script>

<script lang="ts">
	import '../app.css';
	import { onMount, setContext } from 'svelte';
	import { mutableState } from '$lib/state';
	export let fb: FbApp;
	setContext('', fb);

	onMount(() => {
		if (browser) {
			$mutableState.user = localStorage.getItem('authState')
					? JSON.parse(localStorage.getItem('authState'))
					: undefined
		}
	});
</script>

<slot />
