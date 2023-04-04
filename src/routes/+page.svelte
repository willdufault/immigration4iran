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
	<button on:click={() => test()}>testing</button>
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
	import PageWrapper from "./pageWrapper.svelte";

	let cur_lang =  Dictionary.currentLanguage;

</script>