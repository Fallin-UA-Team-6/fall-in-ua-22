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
	import GiClothespin from 'svelte-icons/gi/GiClothespin.svelte';
	import { setContext } from 'svelte';
	export let fb: FbApp;
	setContext('', fb);
</script>

<slot />
<div class="tooltip tooltip-primary absolute bottom-8 right-8 z-1000 h-16 w-16" data-tip="Check In">
	<button class="btn btn-lg btn-primary rounded-full w-full h-full">
		<span class="h-8 w-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			<GiClothespin />
		</span>
	</button>
</div>
