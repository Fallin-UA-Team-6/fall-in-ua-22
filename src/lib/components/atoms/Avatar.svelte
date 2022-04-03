<script lang="ts">
	export let src: string =
		'https://api.lorem.space/image/face?hash=' + Math.random().toString().split('.')[1];
</script>

<div class="avatar online mr-4 aspect-square">
	<div class="w-8 h-8 rounded-full">
		<img {src} alt="some avatar" />
	</div>
</div>
