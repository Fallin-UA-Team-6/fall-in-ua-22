<script lang="ts">
	import { Input } from '$lib';
	import { createEventDispatcher } from 'svelte';

	export let username: string;
	let password: string;

	const dispatch = createEventDispatcher();
</script>

<form>
	<h1 class="font-bold text-2xl">Login</h1>
	<Input label="Username" bind:value={username} />
	<Input type="password" label="Password" bind:value={password} />

	<button type="button" class="btn btn-primary mt-2">Login</button>
	<!-- TODO: OAuth? -->
	<hr class="divider border-t-0 my-0" />

	<div class="btn-group mx-auto">
		<button type="button" class="btn btn-sm">Forgot Password</button>
		<button type="button" class="btn btn-sm" on:click={() => dispatch('mode', 'signup')}
			>Sign Up</button
		>
	</div>
</form>

<style lang="postcss">
	form {
		@apply flex flex-col gap-4 w-96;
	}
</style>
