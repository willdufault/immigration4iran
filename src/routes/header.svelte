<main>
	<div class={"header-wrapper"}>
		<div class={"logo-wrapper"}>
			<p>Immigration4Iran</p>
		</div>
		<div class={"nav-wrapper"}>
			<div class={"nav-item"}>
				<p>Legal <Icon icon="ph:caret-down" /></p>
			</div>
			<div class={"nav-item"}>
				<p>Social Services <Icon icon="ph:caret-down" /></p>
			</div>
			<div class={"nav-item"}>
				<p>Community Building <Icon icon="ph:caret-down" /></p>
			</div>
			<div class={"nav-item"}>
				<p>Language <Icon icon="ph:caret-down" /></p>
			</div>
		</div>
	</div>
</main>
<style>
	*
	{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.header-wrapper
	{
		border: 3px solid blue;
		padding: 2vmin;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-wrapper
	{
		display: flex;
		gap: 5%;
	}

	.nav-item
	{
		display: flex;
	}
</style>
<script>
	import Icon from '@iconify/svelte';
</script>