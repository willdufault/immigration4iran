<main>
    <PageWrapper>
        <Header/>
        <p> {component.title.getText()}</p>


		<!-- need to make sure "available langs" is in correct language. do we need to pass this in? -->


		<TextBlockNGO
		icon=""
		header_text={component.wu_title.getText()}
		header_link="https://www.welcome-united.org"
		languages={component.wu_lang.getText()}
		body={component.wu_body.getText()}
		email={component.wu_contact.getText()}>
		</TextBlockNGO>

		<TextBlockNGO
		icon=""
		header_text={component.jog_title.getText()}
		header_link="http://jogspace.net"
		languages={component.jog_lang.getText()}
		body={component.jog_body.getText()}
		email={component.jog_contact.getText()}>
		</TextBlockNGO>

		<TextBlockNGO
		icon=""
		header_text={component.kar_title.getText()}
		header_link="http://thecaravan.org"
		languages={component.kar_lang.getText()}
		body={component.kar_body.getText()}
		email={component.kar_contact.getText()}>
		</TextBlockNGO>

		<TextBlockNGO
		icon=""
		header_text={component.voice_title.getText()}
		header_link="http://www.thevoiceforum.org/"
		languages=""
		body={component.voice_body.getText()}
		email={component.voice_contact.getText()}>
		</TextBlockNGO>
		
		<TextBlockNGO
		icon=""
		header_text={component.pa_title.getText()}
		header_link="https://www.proasyl.de"
		languages={component.pa_lang.getText()}
		body={component.pa_body.getText()}
		email={component.pa_contact.getText()}>
		</TextBlockNGO>

		<TextBlockNGO
		icon=""
		header_text={component.weu_title.getText()}
		header_link="https://w2eu.info"
		languages={component.weu_lang.getText()}
		body={component.weu_body.getText()}
		email={component.weu_contact.getText()}>
		</TextBlockNGO>

		<TextBlockNGO
		icon=""
		header_text={component.tdf_title.getText()}
		header_link="http://thecaravan.org"
		languages={component.tdf_lang.getText()}
		body={component.kar_body.getText()}
		email={component.kar_contact.getText()}>
		</TextBlockNGO>

		<!-- finish converting these later -->

        <TextBlock>
            <a slot="title" href="https://www.frauenrechte.de/" target="_blank" rel="noreferrer"> {component.tdf_title.getText()} </a>
            <p slot="languages"> {component.available_langs.getText()} {component.tdf_lang.getText()} </p>
            <p slot="body"> {component.tdf_body.getText()} </p>
            <a slot="contact" href="mailto:{component.tdf_contact.getText()}" target="_blank" rel="noreferrer"> {component.contact.getText()} {component.tdf_contact.getText()} </a>
        </TextBlock>
        <TextBlock>
            <a slot="title" href="https://www.medibuero-kiel.de/" target="_blank" rel="noreferrer"> {component.mk_title.getText()} </a>
            <p slot="languages"> {component.available_langs.getText()} {component.mk_lang.getText()} </p>
            <p slot="body"> {component.mk_body.getText()} </p>
            <a slot="contact" href="mailto:{component.mk_contact.getText()}" target="_blank" rel="noreferrer"> {component.contact.getText()} {component.mk_contact.getText()} </a>
        </TextBlock>
        <TextBlock>
            <a slot="title" href="https://verband-dsh.de/ussa/" target="_blank" rel="noreferrer"> {component.ussa_title.getText()} </a>
            <p slot="languages"> {component.available_langs.getText()} {component.ussa_lang.getText()} </p>
            <p slot="body"> {component.ussa_body.getText()} </p>
            <a slot="contact" href="mailto:{component.ussa_contact.getText()}" target="_blank" rel="noreferrer"> {component.contact.getText()} {component.ussa_contact.getText()} </a>
        </TextBlock>
        <TextBlock>
            <a slot="title" href="https://www.unitedforukraine.org" target="_blank" rel="noreferrer"> {component.ufu_title.getText()} </a>
            <p slot="languages"> {component.available_langs.getText()} {component.ufu_lang.getText()} </p>
            <p slot="body"> {component.ufu_body.getText()} </p>
            <a slot="contact" href="mailto:{component.ufu_contact.getText()}" target="_blank" rel="noreferrer"> {component.contact.getText()} {component.ufu_contact.getText()} </a>
        </TextBlock>
        <TextBlock>
            <a slot="title" href="https://immigration4ukraine.eu/" target="_blank" rel="noreferrer"> {component.ifu_title.getText()} </a>
            <p slot="languages"> {component.available_langs.getText()} {component.ifu_lang.getText()} </p>
            <p slot="body"> {component.ifu_body.getText()} </p>
            <a slot="contact" href="mailto:{component.ifu_contact.getText()}" target="_blank" rel="noreferrer"> {component.contact.getText()} {component.ifu_contact.getText()} </a>
        </TextBlock>
        <TextBlock>
            <a slot="title" href="https://immigration4ukraine.eu/" target="_blank" rel="noreferrer"> {component.ifu_title.getText()} </a>
            <p slot="languages"> {component.available_langs.getText()} {component.ifu_lang.getText()} </p>
            <p slot="body"> {component.ifu_body.getText()} </p>
            <a slot="contact" href="mailto:{component.ifu_contact.getText()}" target="_blank" rel="noreferrer"> {component.contact.getText()} {component.ifu_contact.getText()} </a>
        </TextBlock>
    </PageWrapper>
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
    import PageWrapper from "../pageWrapper.svelte";
	import Icon from '@iconify/svelte';
	import TextBlockNGO from "../textBlockNGO.svelte";
</script>