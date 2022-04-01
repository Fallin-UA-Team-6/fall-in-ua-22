<script lang="ts">
	import {CenteredCardLayout, LoginForm, SignupForm} from "$lib";

	let username: string;

	let mode: "signup" | "login" | "recover" = "login"
	$: console.log(mode)
</script>
<CenteredCardLayout>
	{#if mode === "login"}
		<LoginForm bind:username on:mode={e => mode = e.detail}/>
	{:else if mode === "signup"}
		<SignupForm bind:username on:mode={e => mode = e.detail}/>
	{/if}
</CenteredCardLayout>

<style lang="postcss">
</style>