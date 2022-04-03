<script lang="ts">
	import TiWine from 'svelte-icons/ti/TiWine.svelte';
	import { IconButton } from '$lib';
	import CreateGroupForm from './forms/CreateGroupForm.svelte';
	import Modal from '../atoms/Modal.svelte';

	let visible = false;
    function makeVisible(){
        visible = true
    }
    function closeModal(event){
        visible = false

    }
</script>

<div>
	<!-- <input type="checkbox" class="modal-toggle" bind:checked={visible} /> -->
	<IconButton class="button" icon={TiWine} on:click={makeVisible} />

	<Modal bind:visible id="5" title={"Create Group"}>
		<CreateGroupForm on:close={closeModal}/>
	</Modal>
</div>

<style lang="postcss">

    .button {
		@apply flex items-center justify-center h-10 text-sm font-medium rounded hover:bg-gray-800 p-0 w-10;
        @apply w-8 h-8 stroke-current text-gray-300
	}
    svg {
        @apply w-8 h-8 stroke-current text-gray-300
    }
</style>
