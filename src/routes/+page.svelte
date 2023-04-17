<svelte:head>
	<link rel="icon" href="./favicon.png" type="image/png" />
	<title>Immigration4Iran</title>
</svelte:head>
<!-- flip for right-to-left (rtl) languages -->
<!-- to add languages, add "|| [language]" (|| = or) after Persian for every additional rtl language -->
<main>
	<PageWrapper>
		<Header/>

        <div class="title-wrapper">
			<p>{component.intro.getText()}</p>
			<p>|</p>
			<p>{component.introText.getText()}</p>
		</div>
		<div class="tiles-container">
			<div class="tile center-text" style="background:#348888;">
				<p>a</p>
				<div class="tile-cover center-text" style="background:#DAFDBA">
					<p>b</p>
				</div>
			</div>

		</div>

		<!-- <div class="sdg-wrapper">
			<img on:click={() => window.open(`${base}/legal`)} src="https://conflictoflaws.net/News/2019/04/english_SDG_17goals_poster_all_languages_with_UN_emblem_1.png" alt="sdgs"/>
		</div> -->
		<p class="roadmap-title">About Us</p>
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
		box-shadow: 0 0 0.5rem #444;
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
	.title-wrapper
	{
		margin: 0 20%; 
		display: flex; 
		justify-content: space-around;
		font-size: 2.5rem;
		font-weight: 500;
		margin: 4% 10%;
	}

	.tiles-container
	{
		margin: 0 10%;
		display: flex;
		flex-wrap: wrap;
		gap: 2%;
		row-gap: 2vh;
		padding-bottom: 5%;
	}

	.center-text
	{
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.tile
	{
		/* font-size: 1.1rem; */
		position: relative;
		padding: 5%;
		min-height: 30vh;
		width: 30%;
		display: flex;
		flex-grow: 1;
		border-radius: 0.2rem;
	}

	.tile-cover
	{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: inherit;
		padding: inherit;
	}

	.tile:hover .tile-cover
	{
		display: none;
	}
</style>
<script>
	import { base } from "$app/paths";
    import Header from "./header.svelte";
	import TextBlock from "./textBlock.svelte";
	import * as component from "./mainPage.js";
	import {Dictionary} from "./dictionary.js";
	import PageWrapper from "./pageWrapper.svelte";
</script>