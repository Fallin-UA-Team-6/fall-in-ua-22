<script lang="ts" context="module">
    import "leaflet/dist/leaflet.css"

    /**
     * type {require("leaflet")}
     */
    let leaflet
    /**
     * returns {require("leaflet")}
     */
    async function getLeaflet() {
        if (!leaflet) {
            leaflet = await import("leaflet")
        }
        return leaflet
    }
</script>

<script lang="ts">
    import {onMount} from "svelte";
    import {browser} from "$app/env"

    export let coordinates: [number,number];

    onMount(async () => {
        if (browser) {
            const L = await getLeaflet()

            let map = L.map(el, {
                maxZoom: 19,
                trackResize: false,
                zoomControl: false,
                boxZoom: false,
                doubleClickZoom: false,
                dragging: false,
                scrollWheelZoom: false
            }).setView(coordinates, 12);
            L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
                maxZoom: 20
            }).addTo(map)
            L.marker(coordinates).addTo(map)


            // let map = L.map(el).setView([
            //     0,0
            // ], 4).addLayer(L.tileLayer(
            //     'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
            //     maxZoom: 4,
            //     attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
            // }))
            // L.control.scale({imperial: true, metric: true}).addTo(map);
        }
    })

    let el: HTMLDivElement;
</script>


<div bind:this={el} class="w-full h-96 max-w-full max-h-full rounded rounded-lg"/>