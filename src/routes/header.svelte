<main>
	<div class={"header-wrapper"}>
		<div class={"logo-wrapper"}>
			<p>Immigration4Iran</p>
		</div>
		<div class={"nav-wrapper"}>
			<div class={"nav-item"}>
				<p>Legal</p>&nbsp;<Icon icon="ph:caret-down"/>
			</div>
			<HeaderSpacer/>
			<div class={"nav-item"}>
				<p>Social Services</p>&nbsp;<Icon icon="ph:caret-down"/>
			</div>
			<HeaderSpacer/>
			<div class={"nav-item"}>
				<p>Community Building</p>&nbsp;<Icon icon="ph:caret-down"/>
			</div>
			<HeaderSpacer/>
			<div class={"nav-item"}>
				<p>Language</p>&nbsp;<Icon icon="ph:caret-down"/>
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
	}

	.nav-item
	{
		display: flex;
		align-items: center;
		font-size: 20px;
	}
</style>
<script>
	import Icon from '@iconify/svelte';
	import HeaderSpacer from '../header-spacer.svelte';
</script>