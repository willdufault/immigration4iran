<main>
    <PageWrapper>
        <Header/>
        <p class="ngo-title"> {component.title.getText()}</p>
		<!-- need to make sure "available langs" is in correct language. do we need to pass this into textblockNGO? -->
		<!-- <TextBlockNGO
		icon=""
		header_text={component.wu_title.getText()}
		header_link="https://www.welcome-united.org"
		languages={component.wu_lang.getText()}
		body={component.wu_body.getText()}
		email={component.wu_contact.getText()}>
		</TextBlockNGO> -->
		<div class="block-wrapper">
			<TextBlock>
				<a slot="title" href="https://www.welcome-united.org" target="_blank" rel="noreferrer"> {component.wu_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.wu_lang.getText()} </p>
				<p slot="body"> {component.wu_body.getText()} </p>
				<a slot="contact" href="mailto:{component.wu_contact.getText()}" target="_blank" rel="noreferrer"> {component.contact.getText()} {component.wu_contact.getText()} </a>
			</TextBlock>
			<TextBlock>
				<a slot="title" href="http://jogspace.net" target="_blank" rel="noreferrer"> {component.jog_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.jog_lang.getText()} </p>
				<p slot="body"> {component.jog_body.getText()} </p>
				<a slot="contact" href="mailto:{component.jog_contact.getText()}" target="_blank" rel="noreferrer"> {component.contact.getText()} {component.jog_contact.getText()} </a>
			</TextBlock>
			<TextBlock>
				<a slot="title" href="http://thecaravan.org" target="_blank" rel="noreferrer"> {component.kar_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.kar_lang.getText()} </p>
				<p slot="body"> {component.kar_body.getText()} </p>
				<a slot="contact" href="mailto:{component.kar_contact.getText()}" target="_blank" rel="noreferrer"> {component.contact.getText()} {component.kar_contact.getText()} </a>
			</TextBlock>
			<TextBlock>
				<a slot="title" href="http://www.thevoiceforum.org/" target="_blank" rel="noreferrer"> {component.voice_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.voice_lang.getText()} </p>
				<p slot="body"> {component.voice_body.getText()} </p>
				<a slot="contact" href="mailto:{component.voice_contact.getText()}" target="_blank" rel="noreferrer"> {component.contact.getText()} {component.voice_contact.getText()} </a>
			</TextBlock>
			<TextBlock>
				<a slot="title" href="https://www.proasyl.de" target="_blank" rel="noreferrer"> {component.pa_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.pa_lang.getText()} </p>
				<p slot="body"> {component.pa_body.getText()} </p>
				<a slot="contact" href="mailto:{component.pa_contact.getText()}" target="_blank" rel="noreferrer"> {component.contact.getText()} {component.pa_contact.getText()} </a>
			</TextBlock>
			<TextBlock>
				<a slot="title" href="https://w2eu.info" target="_blank" rel="noreferrer"> {component.weu_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.weu_lang.getText()} </p>
				<p slot="body"> {component.weu_body.getText()} </p>
				<a slot="contact" href="mailto:{component.weu_contact.getText()}" target="_blank" rel="noreferrer"> {component.contact.getText()} {component.weu_contact.getText()} </a>
			</TextBlock>
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

	.ngo-title
	{
		font-size: 3rem;
		text-align: center;
		padding: 3%;
	}

	.block-wrapper
	{
		margin: 1% 5%;
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