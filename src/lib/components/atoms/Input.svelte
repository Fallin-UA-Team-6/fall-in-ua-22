<script lang="ts">
	export let label: string;
	export let value: string;
	export let type: 'text' | 'password' = 'text';
</script>

<div class="form-control w-full">
	<label class="label p-0 pb-1">
		<span class="label-text">{label}</span>
	</label>
	{#if type === 'text'}
		<input type="text" placeholder="Type here" bind:value />
	{:else if type === 'password'}
		<input type="password" placeholder="Type here" bind:value />
	{/if}
</div>

<style lang="postcss">
	input {
		@apply input input-bordered w-full m-0;
	}
</style>
