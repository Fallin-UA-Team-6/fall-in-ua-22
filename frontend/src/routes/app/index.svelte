<script lang="ts">
    import {DashboardLayout, Map, UserCard, UserProfile} from "$lib";

    let shown: boolean;
    let shown2: boolean;
    var users = [
        { 
            id: 1, 
            name: 'Leiagh', 
            checkins:{ 
                last: '', 
                next: ''
            }
        },

        { id: 2, name: 'DJ', checkins:{ last: 'now', next: 'later'}}
    ]
    let displayedUser = null

    function gotoProfile(event){
        console.log('go to user')
        displayedUser = event.detail
    }

</script>


<DashboardLayout>
    <div class="flex flex-col flex-grow overflow-auto">
        <div class="grid grid-cols-4 gap-6 items-start">
            { #each users as user}
                <UserCard user={user}  on:viewProfile={gotoProfile} />
            {/each}
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
        <div>
            <UserProfile user={displayedUser} />
        </div>
        <!-- {#if displayedUser} -->
                <!-- <UserProfile user={displayedUser} /> -->
        <!-- {/if} -->
    
    <!-- Component End  -->

</DashboardLayout>