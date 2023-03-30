<main>
    <Header/>
    <p> {component.title.getText()}</p>
    <!--<TextBlock>
        <a slot="title" href="https://www.google.com/" target="_blank" rel="noreferrer"> {component.sample1title.getText()} </a>
        <p slot="body"> {component.sample1body.getText()} </p>
    </TextBlock>-->
    <TextBlock>
        <a slot="title" href="https://www.welcome-united.org/" target="_blank" rel="noreferrer"> {component.wu_title.getText()} </a>
        <p slot="languages"> {component.available_langs.getText()} {component.wu_lang.getText()} </p>
        <p slot="body"> {component.wu_body.getText()} </p>
    </TextBlock>
    <TextBlock>
        <a slot="title" href="http://jogspace.net/" target="_blank" rel="noreferrer"> {component.jog_title.getText()} </a>
        <p slot="languages"> {component.available_langs.getText()} {component.jog_lang.getText()} </p>
        <p slot="body"> {component.jog_body.getText()} </p>
    </TextBlock>
    <TextBlock>
        <a slot="title" href="http://thecaravan.org/" target="_blank" rel="noreferrer"> {component.kar_title.getText()} </a>
        <p slot="languages"> {component.available_langs.getText()} {component.kar_lang.getText()} </p>
        <p slot="body"> {component.kar_body.getText()} </p>
    </TextBlock>
    <TextBlock>
        <a slot="title" href="http://www.thevoiceforum.org/" target="_blank" rel="noreferrer"> {component.voice_title.getText()} </a>
        <p slot="body"> {component.voice_body.getText()} </p>
    </TextBlock>
    <TextBlock>
        <a slot="title" href="https://www.proasyl.de/en/" target="_blank" rel="noreferrer"> {component.pa_title.getText()} </a>
        <p slot="languages"> {component.available_langs.getText()} {component.pa_lang.getText()} </p>
        <p slot="body"> {component.pa_body.getText()} </p>
    </TextBlock>
    <TextBlock>
        <a slot="title" href="https://w2eu.info/" target="_blank" rel="noreferrer"> {component.weu_title.getText()} </a>
        <p slot="languages"> {component.available_langs.getText()} {component.weu_lang.getText()} </p>
        <p slot="body"> {component.weu_body.getText()} </p>
    </TextBlock>
    <TextBlock>
        <a slot="title" href="https://www.frauenrechte.de/" target="_blank" rel="noreferrer"> {component.tdf_title.getText()} </a>
        <p slot="languages"> {component.available_langs.getText()} {component.tdf_lang.getText()} </p>
        <p slot="body"> {component.tdf_body.getText()} </p>
    </TextBlock>
    <TextBlock>
        <a slot="title" href="https://www.medibuero-kiel.de/" target="_blank" rel="noreferrer"> {component.mk_title.getText()} </a>
        <p slot="languages"> {component.available_langs.getText()} {component.mk_lang.getText()} </p>
        <p slot="body"> {component.mk_body.getText()} </p>
    </TextBlock>

</main>

<style>
    *
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>

<script>
    import { base } from "$app/paths";
    import Header from "../header.svelte";
    import TextBlock from "../textBlock.svelte";
    import {Dictionary} from "../dictionary.js";
    import {title} from "./ngoText.js";
    import * as component from "./ngoText.js";
</script>