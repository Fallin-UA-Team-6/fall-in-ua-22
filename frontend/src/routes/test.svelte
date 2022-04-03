<script lang="ts">
import { fire } from "$lib/firebase";


let shown = false;
    export let user;

    $: show = 'display: block';
    
    console.log('show Profile');
    $: newGroupRef = null


    async function makeGroup(){
        newGroupRef = await fire.storeModule.collection(fire.store, 'groups')
        const resp = await fire.storeModule.addDoc(newGroupRef, {members: [], name: 'djtest', photoUrl: ''})



    }

</script>

<div>
    <button class="btn btn-primary" on:click={makeGroup}> Make Group</button>
    {
        newGroupRef
    }
</div>
