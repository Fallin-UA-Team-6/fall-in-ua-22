<main>
	<div class="card">
		<div class="card-body bg-neutral text-neutral-content">
			<slot />
		</div>
	</div>
</main>

<style lang="postcss">
	main {
		@apply flex flex-col items-center justify-center w-screen h-screen text-gray-700 relative;
	}
	div.card-body {
		min-width: theme("spacing.56");
		min-height: theme("spacing.56");
		@apply flex justify-center items-center;
	}
</style>
