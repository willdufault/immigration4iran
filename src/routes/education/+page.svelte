<main>
	<PageWrapper>
		<Header/>
		<div class="title-wrapper">
			<p class="title">Education</p>
		</div>
		<div class="blocks-wrapper">
			<TextBlock>
				<p slot="title"> {component.edu_title.getText()} </p>
				<div slot="body">
					<p align="center">
						<!-- Fix link + make map-->
						<iframe
						class= "map" 
						title="Education Oppurtunities" 
						src="https://www.google.com/maps/d/embed?mid=1dIJKbgjwdzyQCkMGI_Ezai8v06o&hl=de&ehbc=2E312F"/>
					</p>
					<p>
						{component.edu_body1.getText()} 
						<MyLink
							link="https://hochschulforumdigitalisierung.de/de/blog/digital-education-and-information-resources-refugees"
							text={component.edu_link2.getText()}/>
						{component.edu_body2.getText()}
						<MyLink
							link="https://{component.edu_link3.getText()}"
							text={component.edu_link3.getText()}/>
					</p>
				</div>
			</TextBlock>
			<TextBlock>
				<p slot="title"> {component.integration_title.getText()} </p>
				<p slot="body">
					{component.integration_body1.getText()} 
					<MyLink
						link="https://www.bamf.de/EN/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/integrationskurse-node.html"
						text={component.integration_link.getText()}/>
					{component.integration_body2.getText()} 
				</p>
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

	.map
	{
		width:100%;
		height:20rem;
	}

	.title-wrapper
	{
		display: flex;
		justify-content: center;
		margin: 3%
	}

	.title
	{
		font-size: 3rem;
		font-weight: 700;
	}

	.blocks-wrapper
	{
		margin: 0 5%;
	}
</style>
<script>
	import PageWrapper from "../pageWrapper.svelte";
	import Header from "../header.svelte";
	import TextBlock from "../textBlock.svelte";
	import MyLink from "../myLink.svelte";
	import * as component from "./eduText.js";
</script>