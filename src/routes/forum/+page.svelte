<main>
	<PageWrapper>
		<Header/>
		<div class="title-wrapper">
			<p class="title">Community Forum</p>
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
					{component.disc_body.getText()} 
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

	.map
	{
		width:100%;
		height:20rem;
	}
</style>
<script>
	import PageWrapper from "../pageWrapper.svelte";
	import Header from "../header.svelte";
	import TextBlock from "../textBlock.svelte";
	import * as component from "./forumText.js";
</script>