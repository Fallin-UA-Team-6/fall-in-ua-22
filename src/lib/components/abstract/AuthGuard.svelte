<script lang="ts" context="module">
	import { state } from '$lib/state';
</script>

{#if $state.mutable.user}
	<slot name="authenticated" user={$state.mutable.user} />
{:else}
	<slot name="anonymous" />
{/if}
