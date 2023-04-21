<main>
	<PageWrapper>
		<Header/>
		<div class="title-wrapper">
			<p> {component.about_title.getText()} </p>
		</div>
		<div class="body-wrapper">
			<p>
				{component.about_body.getText()}
			</p>
		</div>
	</PageWrapper>
</main>
<style>
	*
	{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.title-wrapper
	{
		font-size: 3rem;
		font-weight: 700;
		display: flex;
		justify-content: center;
		margin: 4%;
	}

	.body-wrapper
	{
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		margin: 0 10%;
		font-size: 1.5rem;
	}
</style>
<script>
	import * as component from "./aboutText.js"; 
	import MyLink from "../myLink.svelte";
	import PageWrapper from "../pageWrapper.svelte";
	import Header from "../header.svelte";
</script>