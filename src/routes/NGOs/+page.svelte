<main>
    <PageWrapper>
        <Header/>
		<div class="page-wrapper">
			<div bind:this={filter_menu} class="filter-wrapper">
				<p class="filter-title">Filter NGOs</p>
				<div class="filter-list">
					<form>
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
				<button bind:this={toggle_menu_button} class="toggle-filter-menu-button" on:click={() => toggleFilterMenu()}>&gt;</button>
				<p class="ngo-title"> {component.title.getText()}</p>
				<div class="block-wrapper">
					<ul>
						{#each ngoArray as ngo}
							{#if ngo.getString().indexOf(search)!==-1}
								<TextBlock>
									<MyLink slot="title" link={ngo.getLink()} text={ngo.getTitle()}/>
									<!-- <a slot="title" href={ngo.getLink()} target="_blank" rel="noreferrer"> {ngo.getTitle()} </a> -->
									<p slot="languages"> {ngo.getGenLangs()} {ngo.getLangs()} </p>
									<p slot="body"> {ngo.getBody()} </p>
									<MailLink slot="contact" ngoContact= {ngo.getContact()} ngoDisplay={ngo.getContactDisplay()}/>
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
		overflow: hidden;
		background: var(--color3);
		display: flex;
		flex-direction: column;
		align-items: center;
		height: fit-content;
		gap: 1%;
		border-radius: 0.2rem;
		width: 0;
		margin: 0;
		padding: 0;
	}

	.filter-title
	{
		font-size: 2rem;
	}

	.toggle-filter-menu-button
	{
		transform: scaleX(1);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 2rem;
		height: 2rem;
		font-size: 2rem;
		cursor: pointer;
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
		padding: 3vh;
		font-weight: 400;
	}

	.block-wrapper
	{
		margin: 1vh 5%;
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
			new Ngo("https://immigration4ukraine.eu/", component.ifu_title.getText(), component.available_langs.getText(), component.ifu_lang.getText(), component.ifu_body.getText(), component.ifu_contact.getText(), component.ifu_contact.getText())
		];
	}

	onMount(async () => {
		loadNGOArray();
	});

	let toggle_menu_button;
	let filter_menu;

	let filter_menu_open = false;

	function toggleFilterMenu()
	{
		if(filter_menu_open)
		{
			// close it
			toggle_menu_button.style.transform = "scaleX(1)";
			filter_menu.style.width = 0;
			filter_menu.style.padding = 0;
			filter_menu.style.margin = 0;
		}
		else
		{
			// open it
			toggle_menu_button.style.transform = "scaleX(-1)";
			filter_menu.style.width = "fit-content";
			filter_menu.style.padding = "3%";
			filter_menu.style.margin = "1%";
		}
		filter_menu_open = !filter_menu_open;
	}

	function filter(strings){
		//return index of search terms != -1
	}
</script>