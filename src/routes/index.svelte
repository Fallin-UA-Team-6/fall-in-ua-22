<script lang="ts">
	import { browser } from '$app/env';

	import { state } from '$lib/state';

	$: if (browser) {
		if ($state.mutable.user) {
			window.location.href = '/app';
		} else {
			window.location.href = '/login';
		}
	}
</script>
