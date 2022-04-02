<script lang="ts">
    import TiPlusOutline from 'svelte-icons/ti/TiPlusOutline.svelte'
</script>

<div class="flex flex-col w-56 border-r border-gray-800 row-span-2 pb-4">
    <div class="flex items-center justify-between w-full h-16 px-4 border-b border-gray-800 text-sm">
        Your Connections
    </div>

    <div class="flex flex-col flex-grow p-4 overflow-auto">
        <a class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800"
           href="#">
            <div class="avatar online mr-4">
                <div class="w-8 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=28212"/>
                </div>
            </div>
            <span>Tejash</span>
            <span class="ml-2 text-2xs text-meta">(1hr)</span>
        </a>
        <a class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800"
           href="#">
            <div class="avatar offline mr-4">
                <div class="w-8 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=28212"/>
                </div>
            </div>
            Leeia
            <span class="ml-2 text-2xs text-meta">(Missed!)</span>
        </a>
        <a class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-800"
           href="#">
            <div class="avatar online mr-4">
                <div class="w-8 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=28212"/>
                </div>
            </div>
            Ian
            <span class="ml-2 text-2xs text-meta">(5min ago)</span>
        </a>
    </div>

    <button class="btn btn-outline flex justify-between flex-row justify-self-end mx-2 text-xs">
            <span class="w-5 h-5">
                <TiPlusOutline/>
            </span>
        <span class="ml-2">Add New Connection</span>
    </button>

</div>