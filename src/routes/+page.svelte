<svelte:head>
	<link rel="icon" href="./favicon.png" type="image/png" />
	<title>Immigration4Iran</title>
</svelte:head>
<main dir={cur_lang === Dictionary.languages.Persian ? "rtl" : "ltr"}>
	<PageWrapper>
		<Header/>
		<div class="sdg-wrapper">
			<img on:click={() => window.open(`${base}/legal`)} src="https://conflictoflaws.net/News/2019/04/english_SDG_17goals_poster_all_languages_with_UN_emblem_1.png" alt="sdgs"/>
		</div>
		<p class="roadmap-title">Legal Roadmap</p>
		<!-- <button on:click={() => window.open(`${base}/NGOs`)}>NGOs page</button> -->
		<!-- <a href="{base}/NGOs">NGOs</a> -->
	</PageWrapper>
</main>
<style>
	*
	{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.sdg-wrapper
	{
		margin: 3%;
		display: flex;
		justify-content: center;
		width: auto;
	}
	
	.sdg-wrapper img
	{
		background: white;
		padding: 1%;
		box-shadow: 0 0 0.5em #444;
		transition: 0.3s ease-in-out;
		border-radius: 0.2rem;;
		cursor: pointer;
	}

	.sdg-wrapper img:hover
	{
		box-shadow: 0 0 1.5em #666;
		transform: scale(1.02)
	}

	.roadmap-title
	{
		text-align: center;
		font-size: 3rem;
		font-family: var(--font1);
	}
</style>
<script>
	import { base } from "$app/paths";
    import Header from "./header.svelte";
	import TextBlock from "./textBlock.svelte";
	import {Dictionary} from "./dictionary.js";
	import PageWrapper from "./pageWrapper.svelte";


	let cur_lang =  Dictionary.currentLanguage;


	// function load(){
	// 	window.addEventListener("DOMContentLoaded", () => {
	// 		let language = localStorage.getItem("language");
	// 		Dictionary.setCurrentLanguage(language);
	// 		//handle flipping if necessary?
	// 	});
	// }
	//
	// load();




	//localStorage.setItem("theme", "your value goes here")

</script>