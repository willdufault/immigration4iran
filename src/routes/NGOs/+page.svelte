<main>
    <PageWrapper>
        <Header/>
        <p class="ngo-title"> {component.title.getText()}</p>
		<div class="block-wrapper">
			<TextBlock>
				<!-- <Icon slot="icon" icon="carbon:face-cool" /> -->
				<a slot="title" href="https://www.welcome-united.org" target="_blank" rel="noreferrer"> {component.wu_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.wu_lang.getText()} </p>
				<p slot="body"> {component.wu_body.getText()} </p>
				<MailLink slot="contact" ngoContact= {component.wu_contact.getText()} ngoDisplay={component.wu_contact.getText()}/>
			</TextBlock>
			<TextBlock>
				<a slot="title" href="http://jogspace.net" target="_blank" rel="noreferrer"> {component.jog_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.jog_lang.getText()} </p>
				<p slot="body"> {component.jog_body.getText()} </p>
				<MailLink slot="contact" ngoContact= {component.jog_contact.getText()} ngoDisplay={component.jog_contact.getText()}/>
			</TextBlock>
			<TextBlock>
				<a slot="title" href="http://thecaravan.org" target="_blank" rel="noreferrer"> {component.kar_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.kar_lang.getText()} </p>
				<p slot="body"> {component.kar_body.getText()} </p>
				<MailLink slot="contact" ngoContact= {component.kar_contact.getText()} ngoDisplay={component.kar_contact.getText()}/>
			</TextBlock>
			<TextBlock>
				<a slot="title" href="http://www.thevoiceforum.org/" target="_blank" rel="noreferrer"> {component.voice_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.voice_lang.getText()} </p>
				<p slot="body"> {component.voice_body.getText()} </p>
				<MailLink slot="contact" ngoContact= {component.voice_contact.getText()} ngoDisplay={component.voice_contact.getText()}/>
			</TextBlock>
			<TextBlock>
				<a slot="title" href="https://www.proasyl.de" target="_blank" rel="noreferrer"> {component.pa_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.pa_lang.getText()} </p>
				<p slot="body"> {component.pa_body.getText()} </p>
				<MailLink slot="contact" ngoContact= {component.pa_contact.getText()} ngoDisplay="proasyl@proasyl.de"/>
			</TextBlock>
			<TextBlock>
				<a slot="title" href="https://w2eu.info" target="_blank" rel="noreferrer"> {component.weu_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.weu_lang.getText()} </p>
				<p slot="body"> {component.weu_body.getText()} </p>
				<MailLink slot="contact" ngoContact= {component.weu_contact.getText()} ngoDisplay={component.weu_contact.getText()}/>
			</TextBlock>
			<TextBlock>
				<a slot="title" href="https://www.frauenrechte.de/" target="_blank" rel="noreferrer"> {component.tdf_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.tdf_lang.getText()} </p>
				<p slot="body"> {component.tdf_body.getText()} </p>
				<MailLink slot="contact" ngoContact= {component.tdf_contact.getText()} ngoDisplay={component.tdf_contact.getText()}/>
			</TextBlock>
			<TextBlock>
				<a slot="title" href="https://www.medibuero-kiel.de/" target="_blank" rel="noreferrer"> {component.mk_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.mk_lang.getText()} </p>
				<p slot="body"> {component.mk_body.getText()} </p>
				<MailLink slot="contact" ngoContact= {component.mk_contact.getText()} ngoDisplay="info@medibuero-kiel.de"/>
			</TextBlock>
			<TextBlock>
				<a slot="title" href="https://verband-dsh.de/ussa/" target="_blank" rel="noreferrer"> {component.ussa_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.ussa_lang.getText()} </p>
				<p slot="body"> {component.ussa_body.getText()} </p>
				<MailLink slot="contact" ngoContact= {component.ussa_contact.getText()} ngoDisplay={component.ussa_contact.getText()}/>
			</TextBlock>
			<TextBlock>
				<a slot="title" href="https://www.unitedforukraine.org" target="_blank" rel="noreferrer"> {component.ufu_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.ufu_lang.getText()} </p>
				<p slot="body"> {component.ufu_body.getText()} </p>
				<MailLink slot="contact" ngoContact= {component.ufu_contact.getText()} ngoDisplay={component.ufu_contact.getText()}/>
			</TextBlock>
			<TextBlock>
				<a slot="title" href="https://immigration4ukraine.eu/" target="_blank" rel="noreferrer"> {component.ifu_title.getText()} </a>
				<p slot="languages"> {component.available_langs.getText()} {component.ifu_lang.getText()} </p>
				<p slot="body"> {component.ifu_body.getText()} </p>
				<MailLink slot="contact" ngoContact= {component.ifu_contact.getText()} ngoDisplay={component.ifu_contact.getText()}/>
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
	import MyLink from '../mailLink.svelte';
    import MailLink from "../mailLink.svelte";
</script>