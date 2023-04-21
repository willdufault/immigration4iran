<main>
	<PageWrapper>
		<Header/>
		<div class="title-wrapper">
			<p>{component.title.getText()}</p>
		</div>
		<div class="tools-wrapper">
			<TextBlock>
				<!-- <p slot="title"> {component.integration_title.getText()} </p>
				<p slot="body">
					{component.integration_body1.getText()} 
					<MyLink
						link="https://www.bamf.de/EN/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/integrationskurse-node.html"
						text={component.integration_link.getText()}/>
					{component.integration_body2.getText()} 
				</p> -->
			</TextBlock>
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

	.tools-wrapper
	{
		margin: 0 10%;
	}
</style>
<script>
	import PageWrapper from "../pageWrapper.svelte";
	import Header from "../header.svelte";
	import TextBlock from "../textBlock.svelte";
	import * as component from "./legalText.js";
</script>