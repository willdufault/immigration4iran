<main>
    <PageWrapper>
        <Header/>
        <p> {component.title.getText()}</p>

        <TextBlock>
            <a slot="title" href="https://gsbtb.org/activity-calendar/" target="_blank" rel="noreferrer"> {component.gsbtb_title.getText()} </a>
            <p slot="languages"> {component.available_langs.getText()} {component.gsbtb_lang.getText()} </p>
            <p slot="body"> {component.gsbtb_body.getText()} </p>
        </TextBlock>

        <TextBlock>
            <a slot="title" href="http://www.farenet.org/campaigns/refugees-football-database/" target="_blank" rel="noreferrer"> {component.fnet_title.getText()} </a>
            <p slot="languages"> {component.available_langs.getText()} {component.fnet_lang.getText()} </p>
            <p slot="body"> {component.fnet_body.getText()} </p>
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
            <iframe title="I4I Discord" src="https://discord.com/widget?id=1089878589115224074&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>    
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
    .discord
    {
        margin: 0 2%; 
        display: flex; 
        justify-content:space-evenly;
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