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
		if (window.location.search.includes('next=')) {
				const next = window.location.search
					.substring(1)
					.split('&')
					.map<string[]>(v => v.split("="))
					.find(([key, value]) => key === 'next')[1];
				window.location.href = decodeURI(next)
		} else {
			window.location.href = '/app';
		}

	}

	$: if ($state.mutable.firestoreInitialized) {
		signIn = async () => {
			const result = await signInWithPopup(fire.auth, provider);
			if (window.location.search.includes('next=')) {
				const next = window.location.search
					.substring(1)
					.split('&')
					.map<string[]>(v => v.split("="))
					.find(([key, value]) => key === 'next')[1];
				goto(decodeURI(next))
			} else {
				goto('/app');
			}
		};
	}
</script>

<CenteredCardLayout>
	<button class="btn btn-primary btn-lg" on:click={signIn}>Login</button>
</CenteredCardLayout>

<style lang="postcss">
</style>
