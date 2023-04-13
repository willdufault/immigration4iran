<main>
    <PageWrapper>
        <Header/>
        <p class="comm-title"> {component.title.getText()}</p>
		<div class="block-wrapper">
			<TextBlock>
				<a slot="title" href="https://gsbtb.org/activity-calendar/" target="_blank" rel="noreferrer"> {component.gsbtb_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.gsbtb_lang.getText()} </p>
				<p slot="body"> {component.gsbtb_body.getText()} </p>
			</TextBlock>

			<TextBlock>
				<a slot="title" href="http://www.farenet.org/campaigns/refugees-football-database/" target="_blank" rel="noreferrer"> {component.fnet_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.fnet_lang.getText()} </p>
				
				<div slot="body"> 
					<p align="center">
						<iframe
						class= "map" 
						title="Local Programs for Refugees" 
						src="https://www.google.com/maps/d/embed?mid=1d3pP5NOJ5WP7Qox-V3ewqk_gnc8&ehbc=2E312F"/>
					</p>
					{component.fnet_body.getText()} 
				</div>
			</TextBlock>

			<TextBlock>
				<a slot="title" href="https://www.willkommensbuendnis-steglitz-zehlendorf.de/" target="_blank" rel="noreferrer"> {component.wb_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.wb_lang.getText()} </p>
				<p slot="body"> {component.wb_body.getText()} </p>
			</TextBlock>

			<TextBlock>
				<a slot="title" href="https://www.berlin.de/en/events/" target="_blank" rel="noreferrer"> {component.be_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.be_lang.getText()} </p>
				<p slot="body"> {component.be_body.getText()} </p>
			</TextBlock>

			<div class = "discord">
				<TextBlock>
					<a slot="title" href="https://discord.gg/ur5qMP9WEE" target="_blank" rel="noreferrer"> {component.disc_title.getText()} </a>
					<p slot="languages"> {component.available_langs.getText()} {component.disc_lang.getText()} </p>
					<p slot="body"> {component.disc_body.getText()} </p>
				</TextBlock>
				<iframe title="I4I Discord" src="https://discord.com/widget?id=1089878589115224074&theme=dark" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>    
			</div>
			
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

	.comm-title
	{
		font-size: 3rem;
		text-align: center;
		padding: 3%;
	}

	.block-wrapper
	{
		margin: 1% 5%;
	}

    .discord
    {
        display: flex; 
		gap: 3%;
    }

	.discord iframe
	{
		height: 20rem;
	}
</style>

<script>
    import { base } from "$app/paths";
    import Header from "../header.svelte";
    import TextBlock from "../textBlock.svelte";
    import {Dictionary} from "../dictionary.js";
    import * as component from "./communityText.js";
    import PageWrapper from "../pageWrapper.svelte";
</script>