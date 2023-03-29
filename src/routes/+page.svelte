<svelte:head>
	<link rel="icon" href="./favicon.png" type="image/png" />
	<title>Immigration4Iran</title>
</svelte:head>
<main style="--color1: {color1}; --color2: {color2}; --color3: {color3}; --color4: {color4};" dir={cur_lang === Dictionary.languages.Persian ? "rtl" : "ltr"}>
	<Header/>
	<a href="{base}/test">test routing</a>
	<TextBlock>
		<p slot="body"> 2 </p>
		<p slot="title"> This is the title of my block </p>
	</TextBlock>
	<a href="{base}/NGOs">NGOs</a>
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
    import Header from "./header.svelte";
	import TextBlock from "./textBlock.svelte";
	import {Dictionary} from "./dictionary.js";
	import { color1, color2, color3, color4 } from "../theme";

	let cur_lang =  Dictionary.currentLanguage;

</script>