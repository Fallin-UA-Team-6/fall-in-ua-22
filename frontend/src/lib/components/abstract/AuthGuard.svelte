<script lang="ts" context="module">
	import { state } from '$lib/state';
</script>

{#if $state.user}
	<slot name="authenticated" user={$state.user} />
{:else}
	<slot name="anonymous" />
{/if}
