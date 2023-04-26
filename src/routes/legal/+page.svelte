<main>
	<PageWrapper>
		<Header/>
		<div class="title-wrapper">
			<p>{component.title.getText()}</p>
		</div>
		<div class="tools-wrapper">
			<TextBlock>
				<MyLink slot="title" link={`${base}/roadmap`} text={component.roadmap_title.getText()}/>
				<p slot="body">{component.roadmap_description.getText()}</p>
			</TextBlock>
			
			<!-- <TextBlock>
				<MyLink slot="title" link="https://google.com" text="legal tool name"/>
				<p slot="body">legal tool description</p>
			</TextBlock> -->
		
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
		align-items: center;
		text-align: center;
		margin: 4%;
	}

	.tools-wrapper
	{
		margin: 0 10%;
	}

	/* media queries */
	@media (min-width: 1800px)
	{
		.title-wrapper
		{
			font-size: 4rem;
			margin: 5%
		}
	}

	@media (max-width: 900px)
	{
		.title-wrapper
		{
			font-size: 2.5rem;
			margin: 8%;
		}
	}

	@media (max-width: 600px)
	{
		.title-wrapper
		{
			margin: 10%;
		}
	}
</style>
<script>
    import { base } from "$app/paths";
	import PageWrapper from "../pageWrapper.svelte";
	import Header from "../header.svelte";
	import TextBlock from "../textBlock.svelte";
	import * as component from "./legalText.js";
	import MyLink from "../myLink.svelte";
</script>