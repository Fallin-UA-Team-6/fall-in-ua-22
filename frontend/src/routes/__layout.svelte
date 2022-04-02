<script>
	import '../app.css';
    import GiClothespin from 'svelte-icons/gi/GiClothespin.svelte'
</script>

<slot />

<button class="btn btn-lg btn-primary rounded-full absolute bottom-8 right-8 z-1000 h-16 w-16">
    <span class="h-8 w-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <GiClothespin/>
    </span>

</button>
