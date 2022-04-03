<script lang="ts" context="module">
	import 'leaflet/dist/leaflet.css';
	import debounce from 'lodash.debounce';

	let leaflet: typeof import('leaflet');

	async function getLeaflet() {
		if (!leaflet) {
			leaflet = await import('leaflet');
		}
		return leaflet;
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/env';

	export let coordinates: [number, number];
	let clientHeight;
	let map: ReturnType<typeof import('leaflet')['map']>;

	const updateMap = debounce(
		() => {
			map.invalidateSize();
		},
		15,
		{ leading: false }
	);

	$: if (clientHeight && map) updateMap();

	onMount(async () => {
		if (browser) {
			const L = await getLeaflet();
			map = L.map(el, {
				maxZoom: 19,
				trackResize: false,
				zoomControl: false,
				boxZoom: false,
				doubleClickZoom: false,
				dragging: false,
				scrollWheelZoom: false
			}).setView(coordinates, 12);
			L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
				attribution:
					'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
				maxZoom: 20
			}).addTo(map);
		}
	});

	let el: HTMLDivElement;
</script>

<div
	bind:this={el}
	class="w-full h-full max-w-full max-h-full rounded rounded-lg"
	bind:clientHeight
/>
