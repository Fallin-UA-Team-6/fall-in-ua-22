<script lang="ts">
    import {IconButton} from "$lib"
    import TiHomeOutline from 'svelte-icons/ti/TiHomeOutline.svelte'
    import TiDocument from 'svelte-icons/ti/TiDocument.svelte'
    import TiHeart from 'svelte-icons/ti/TiHeart.svelte'
</script>

<div class="flex flex-col items-center w-16 pb-4 overflow-auto border-r border-gray-800 text-gray-500 row-span-2">
    <a class="flex items-center justify-center flex-shrink-0 w-full h-16" href="#">
        <svg class="w-8 h-8 stroke-current text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
        </svg>
    </a>

    <div class="divider my-0 mx-2"/>

    <IconButton icon={TiHomeOutline}/>
    <IconButton icon={TiDocument}/>
    <IconButton icon={TiHeart}/>
</div>