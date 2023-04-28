<svelte:head>
	<link rel="icon" href="./favicon.png" type="image/png" />
	<title>Immigration4Iran | {component.title.getText()}</title>
</svelte:head>
<main>
	<PageWrapper>
		<Header/>
		<div class="title-wrapper center-text">
			<p>{component.title.getText()}</p>
		</div>
		<div class="desc-wrapper center-text">
			<p>{component.desc.getText()} </p>
		</div>
		<div class="blocks-wrapper">
			<TextBlock>
				<a slot="title" href="https://discord.gg/ur5qMP9WEE" target="_blank" rel="noreferrer"> {component.disc_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.disc_lang.getText()} </p>
				<div class="discord-wrapper" slot="body"> 
					<p align="center">
						<iframe
						class="map"
						title="I4I Discord"
						src="https://discord.com/widget?id=1089878589115224074&theme=dark"
						allowtransparency="true"
						frameborder="0"
						sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"/>
					</p>
				</div>
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
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		margin: 3%;
		font-size: 3rem;
		font-weight: 700;
	}

	.desc-wrapper
	{
		font-size: 1.5rem;
		margin: 4%;
	}

	.center-text
	{
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.blocks-wrapper
	{
		margin: 0 5%;
	}

	.map
	{
		width:100%;
		height:20rem;
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
	import PageWrapper from "../pageWrapper.svelte";
	import Header from "../header.svelte";
	import TextBlock from "../textBlock.svelte";
	import * as component from "./forumText.js";
</script>