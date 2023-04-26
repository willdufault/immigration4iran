<main>
    <PageWrapper>
        <Header/>
		<p class="ngo-title"> {component.title.getText()}</p>
		<div class="page-wrapper">
			<div class="filter-wrapper">
				<p class="filter-title">Filter NGOs</p>
				<div class="filter-list">
					<form class="filter-list-form">
						<label for="searchbar">Search:</label>
						<input type="search" id="searchbar" bind:value={search}>
						<br>
						<input type="checkbox" id="legal">
						<label for="legal">Legal</label>
						<br>
						<input type="checkbox" id="legal">
						<label for="legal">Legal</label>
						<br>
						<input type="checkbox" id="legal">
						<label for="legal">Legal</label>
					</form>
				</div>
			</div>
			<div class="ngo-wrapper">
				<div class="block-wrapper">
					<ul>
						{#each ngoArray as ngo}
							{#if ngo.getString().toLowerCase().indexOf(search.toLowerCase()) !== -1}
								<TextBlock>
									<MyLink slot="title" link={ngo.getLink()} text={ngo.getTitle()}/>
									<!-- <a slot="title" href={ngo.getLink()} target="_blank" rel="noreferrer"> {ngo.getTitle()} </a> -->
									<p slot="languages"> {ngo.getGenLangs()} {ngo.getLangs()} </p>
									<p slot="body"> {ngo.getBody()} </p>
									<MailLink slot="contact" ngoContact={ngo.getContact()} ngoDisplay={ngo.getContactDisplay()}/>
								</TextBlock>
							{/if}
						{/each}
					</ul>
				</div>
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

	.page-wrapper
	{
		display: flex;
	}

	.filter-wrapper
	{
		background: var(--color3);
		display: flex;
		flex-direction: column;
		align-items: center;
		height: fit-content;
		width: fit-content;
		gap: 1%;
		border-radius: 0.2rem;
		margin: 1vh 0 0 2%;
		padding: 2%;
		border: 0.1rem solid #666666;
	}

	.filter-title
	{
		font-size: 2rem;
	}

	.ngo-wrapper
	{
		/* border: 2px double red; */
		width: 100%;
	}

	.ngo-title
	{
		font-size: 3rem;
		text-align: center;
		margin: 3%;
		font-weight: 700;
	}

	.block-wrapper
	{
		margin: 1vh 5%;
	}

	/* media queries */
	@media (min-width: 1800px)
	{
		.ngo-title
		{
			font-size: 4rem;
			margin: 5%
		}

		.filter-wrapper
		{
			gap: 1%;
			font-size: 1.6rem;
		}

		.filter-title
		{
			font-size: 2.5rem;
		}
	}

	@media (max-width: 900px)
	{
		.ngo-title
		{
			font-size: 2.5rem;
			margin: 8%;
		}

		.filter-wrapper
		{
			gap: 1%;
			font-size: 1rem;
		}

		.filter-title
		{
			font-size: 1.8rem;
		}
	}

	@media (max-width: 600px)
	{
		.ngo-title
		{
			margin: 10%;
		}

		.page-wrapper
		{
			flex-direction: column;
		}

		.filter-wrapper
		{
			margin: 1% 5%;
			padding: 2%;
			gap: 1%;
			font-size: 1rem;
			width: auto;
		}

		.filter-title
		{
			font-size: 1.8rem;
		}
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
	import MyLink from '../myLink.svelte';
    import MailLink from "../mailLink.svelte";
	import {Ngo} from "./ngoClass.js";
	import {onMount} from "svelte";

	let ngoArray = [];
	let search = "";

	loadNGOArray();

	function loadNGOArray() {
		ngoArray = [
			new Ngo("https://www.welcome-united.org", component.wu_title.getText(), component.available_langs.getText(), component.wu_lang.getText(), component.wu_body.getText(), component.wu_contact.getText(), component.wu_contact.getText()),
			new Ngo("http://jogspace.net", component.jog_title.getText(), component.available_langs.getText(), component.jog_lang.getText(), component.jog_body.getText(), component.jog_contact.getText(), component.jog_contact.getText()),
			new Ngo("http://thecaravan.org", component.kar_title.getText(), component.available_langs.getText(), component.kar_lang.getText(), component.kar_body.getText(), component.kar_contact.getText(), component.kar_contact.getText()),
			new Ngo("http://www.thevoiceforum.org/", component.voice_title.getText(), component.available_langs.getText(), component.voice_lang.getText(), component.voice_body.getText(), component.voice_contact.getText(), component.voice_contact.getText()),
			new Ngo("https://www.proasyl.de", component.pa_title.getText(), component.available_langs.getText(), component.pa_lang.getText(), component.pa_body.getText(), component.pa_contact.getText(), "proasyl@proasyl.de"),
			new Ngo("https://w2eu.info", component.weu_title.getText(), component.available_langs.getText(), component.weu_lang.getText(), component.weu_body.getText(), component.weu_contact.getText(), component.weu_contact.getText()),
			new Ngo("https://www.frauenrechte.de/", component.tdf_title.getText(), component.available_langs.getText(), component.tdf_lang.getText(), component.tdf_body.getText(), component.tdf_contact.getText(), component.tdf_contact.getText()),
			new Ngo("https://www.medibuero-kiel.de/", component.mk_title.getText(), component.available_langs.getText(), component.mk_lang.getText(), component.mk_body.getText(), component.mk_contact.getText(), "info@medibuero-kiel.de"),
			new Ngo("https://verband-dsh.de/ussa/", component.ussa_title.getText(), component.available_langs.getText(), component.ussa_lang.getText(), component.ussa_body.getText(), component.ussa_contact.getText(), component.ussa_contact.getText()),
			new Ngo("https://www.unitedforukraine.org", component.ufu_title.getText(), component.available_langs.getText(), component.ufu_lang.getText(), component.ufu_body.getText(), component.ufu_contact.getText(), component.ufu_contact.getText()),
			new Ngo("https://immigration4ukraine.eu/", component.ifu_title.getText(), component.available_langs.getText(), component.ifu_lang.getText(), component.ifu_body.getText(), component.ifu_contact.getText(), component.ifu_contact.getText()),
			new Ngo(component.haw_link.getText(), component.haw_title.getText(), component.available_langs.getText(), component.haw_lang.getText(), component.haw_body.getText(), component.haw_contact.getText(), component.haw_contact.getText()),
			new Ngo("https://gsbtb.org/", component.gsb_title.getText(), component.available_langs.getText(), component.gsb_lang.getText(), component.gsb_body.getText(), component.gsb_contact.getText(), component.gsb_contact.getText()),
			new Ngo("https://www.willkommensbuendnis-steglitz-zehlendorf.de/", component.wbs_title.getText(), component.available_langs.getText(), component.wbs_lang.getText(), component.wbs_body.getText(), component.wbs_contact.getText(), component.wbs_contact.getText()),
			new Ngo("https://fluechtlingsrat-berlin.de/", component.flr_title.getText(), component.available_langs.getText(), component.flr_lang.getText(), component.flr_body.getText(), component.flr_contact.getText(), component.flr_contact.getText()),
			new Ngo("https://www.refugees-welcome.net/", component.rw_title.getText(), component.available_langs.getText(), component.rw_lang.getText(), component.rw_body.getText(), component.rw_contact.getText(), component.rw_contact.getText()),
			new Ngo("https://gsbtb.org/", component.gsbtb_title.getText(), component.available_langs.getText(), component.gsbtb_lang.getText(), component.gsbtb_body.getText(), component.gsbtb_contact.getText(), component.gsbtb_contact.getText()),
			new Ngo("https://www.willkommensbuendnis-steglitz-zehlendorf.de/", component.wb_title.getText(), component.available_langs.getText(), component.wb_lang.getText(), component.wb_body.getText(),component.wb_contact.getText(),component.wb_contact.getText())
		];
	}

	onMount(async () => {
		loadNGOArray();
	});

	function filter(strings){
		//return index of search terms != -1
	}
</script>