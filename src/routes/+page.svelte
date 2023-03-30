<svelte:head>
	<link rel="icon" href="./favicon.png" type="image/png" />
	<title>Immigration4Iran</title>
</svelte:head>
<main dir={cur_lang === Dictionary.languages.Persian ? "rtl" : "ltr"}>
	<PageWrapper>
		<Header/>
		<a href="{base}/test">test routing</a>
		<TextBlock>
			<p slot="body"> 2 </p>
			<p slot="title"> This is the title of my block </p>
		</TextBlock>
		<a href="{base}/NGOs">NGOs</a>
	</PageWrapper>
	<br><br>
	<div class="tile-wrapper">
		<div class="tile-back">
			back
		</div>
		<div class="tile-front">
			front
		</div>
	</div>
</main>
<style>
	*
	{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.tile-wrapper
	{
		position: relative;
		height: 100px;
		width: 100px;
	}

	.tile-front
	{
		position: absolute;
		background: hotpink;
		height: 100%;
		width: 100%;
	}

	.tile-back
	{
		position: absolute;
		background: lime;
		height: 100%;
		width: 100%;
	}
	
	.tile-front:hover
	{
		display: none;
	}
</style>
<script>
	import { base } from "$app/paths";
    import Header from "./header.svelte";
	import TextBlock from "./textBlock.svelte";
	import {Dictionary} from "./dictionary.js";
	import PageWrapper from "./pageWrapper.svelte"
	import { color1, color2, color3, color4 } from "../theme";

	let cur_lang =  Dictionary.currentLanguage;

</script>