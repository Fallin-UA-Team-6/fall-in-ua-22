<script lang="ts">
	import { DashboardLayout } from '$lib';
	import CheckInButton from '$lib/components/molecules/CheckInButton.svelte';
</script>

<DashboardLayout>
	<slot />
</DashboardLayout>
<CheckInButton />
