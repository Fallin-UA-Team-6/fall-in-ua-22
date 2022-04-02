<script lang="ts">
    import {DashboardLayout, Map} from "$lib";
</script>

<DashboardLayout>
    <div class="flex flex-col flex-grow overflow-auto">
        <div class="grid grid-cols-3 gap-6">
            <div class="h-96 col-span-3 bg-gray-700 flex flex-col p-4 rounded-lg rounded">
                <div class="h-1/5 flex justify-between items-start">
                    <h2 class="text-lg text-primary-content font-bold mb-0 pb-0">Tejash Checked In</h2>
                    <span class="text-xs text-meta tracking-wider">2022/04/01 @ 18:04</span>
                </div>
                <div class="h-4/5 rounded">
                    <Map coordinates={[40.781840, -96.621860]}/>
                </div>
            </div>
            <div class="h-96 col-span-3 bg-gray-700 flex flex-col p-4 rounded-lg rounded">
                <div class="h-1/5 flex justify-between items-start">
                    <h2 class="text-lg text-primary-content font-bold mb-0 pb-0">Leeia Checked In</h2>
                    <span class="text-xs text-meta">2022/04/01 @ 18:04</span>
                </div>
                <div class="h-4/5 rounded">
                    <Map coordinates={[40.781840, -96.621860]}/>
                </div>
            </div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-2 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-2 bg-gray-700"></div>
            <div class="h-24 col-span-3 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-2 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-2 bg-gray-700"></div>
            <div class="h-24 col-span-3 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-2 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-2 bg-gray-700"></div>
            <div class="h-24 col-span-3 bg-gray-700"></div>
        </div>
    </div>
    <!-- Component End  -->

</DashboardLayout>