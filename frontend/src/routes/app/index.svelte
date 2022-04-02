<script lang="ts">
	import { DashboardLayout, UserCard } from '$lib';

    import {state} from "$lib/state";
</script>

<DashboardLayout>
	<div class="flex flex-col flex-grow overflow-auto">
		<div class="grid grid-cols-4 gap-6 items-start">
			{#if $state?.mutable.selectedGroup}
                <!-- TODO SHOW GROUP -->
            {:else}
                Please select a group to continue...
            {/if}
		</div>
	</div>
</DashboardLayout>
