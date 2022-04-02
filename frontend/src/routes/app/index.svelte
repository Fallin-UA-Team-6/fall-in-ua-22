<script lang="ts">
    import {DashboardLayout, Map, UserCard} from "$lib";
import Modal from "$lib/components/atoms/Modal.svelte";
</script>


<DashboardLayout>
    <div class="flex flex-col flex-grow overflow-auto">
        <div class="grid grid-cols-4 gap-6 items-start">
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-4 md:col-span-2 lg:col-span-1 bg-gray-700"></div>
        </div>
    </div>
    <Modal visible id="5" title="Test Modal!">
        Something
    </Modal>
</DashboardLayout>