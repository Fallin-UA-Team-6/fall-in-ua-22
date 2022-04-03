<script lang="ts">
	import IconButton from '$lib/components/atoms/IconButton.svelte';
	import FaGoogle from 'svelte-icons/fa/FaGoogle.svelte';

	import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
	import { fire } from '$lib/firebase';
	import { state } from '$lib/state';
	const provider = new GoogleAuthProvider();

	let signIn;
	$: if ($state.mutable.firestoreInitialized) {
		signIn = async () => {
			const result = await signInWithPopup(fire.auth, provider);
		};
	}

    async function logout() {
		await fire.authModule.signOut(fire.auth);
		// goto('/login');
	}
</script>

<main>
	<button class="btn btn-primary" on:click={signIn}>Login</button>
    <button class="btn btn-error" on:click={logout}> Logout </button>
    {JSON.stringify($state.user)}
</main>

<style lang="postcss">
	main {
		@apply p-8;
	}
</style>
