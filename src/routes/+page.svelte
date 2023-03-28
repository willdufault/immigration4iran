<svelte:head>
	<link rel="icon" href="./favicon.png" type="image/png" />
	<title>Immigration4Iran</title>
</svelte:head>
<main style="--primary_color: {primary_color};" dir={cur_lang === Dictionary.languages.Persian ? "rtl" : "ltr"}>
	<Header/>
	<a href="{base}/test">test routing</a>
	<TextBlock>
		<p slot="body"> 2 </p>
		<p slot="title"> This is the title of my block </p>
	</TextBlock>
	<a href="{base}/NGOs">NGOs</a>
	<br><br>
	<Test/>
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
	import { primary_color } from "../theme";

	import Test from "./test.svelte";

	let cur_lang =  Dictionary.currentLanguage;

</script>