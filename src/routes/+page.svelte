<svelte:head>
	<link rel="icon" href="./favicon.png" type="image/png" />
	<title>Immigration4Iran</title>
</svelte:head>
<main dir={cur_lang === Dictionary.languages.Persian ? "rtl" : "ltr"}>
	<PageWrapper>
		<Header/>
		<div class="sdg-wrapper">
			<img src="https://conflictoflaws.net/News/2019/04/english_SDG_17goals_poster_all_languages_with_UN_emblem_1.png" alt="sdgs"/>
		</div>
		<p class="roadmap-title">Legal Roadmap</p>
		<button on:click={() => window.open(`${base}/NGOs`)}>NGOs page</button>
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
		border: 1px solid blue;
		border-radius: 0.2rem;;
	}

	.roadmap-title
	{
		text-align: center;
		font-size: 3rem;
	}
</style>
<script>
	import { base } from "$app/paths";
    import Header from "./header.svelte";
	import TextBlock from "./textBlock.svelte";
	import {Dictionary} from "./dictionary.js";
	import PageWrapper from "./pageWrapper.svelte";

	let cur_lang =  Dictionary.currentLanguage;

</script>