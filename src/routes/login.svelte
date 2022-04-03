<script lang="ts">
	import { CenteredCardLayout, LoginForm, SignupForm } from '$lib';
	import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
	import IconButton from '$lib/components/atoms/IconButton.svelte';
	import FaGoogle from 'svelte-icons/fa/FaGoogle.svelte';
	import { state } from '$lib/state';
	import { fire } from '$lib/firebase';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	const provider = new GoogleAuthProvider();
	let signIn;

	$: if ($state.mutable.user) {
		console.log($state.mutable.user);
		window.location.href = "/app"
	}

	$: if ($state.mutable.firestoreInitialized) {
		signIn = async () => {
			const result = await signInWithPopup(fire.auth, provider);
			goto('/app');
		};
	}
</script>

<CenteredCardLayout>
	<button class="btn btn-primary btn-lg" on:click={signIn}>Login</button>
</CenteredCardLayout>

<style lang="postcss">
</style>
