<svelte:head>
	<link rel="icon" href="./favicon.png" type="image/png" />
	<title>Immigration4Iran</title>
</svelte:head>
<main>
	<Header/>
	<TextBlock/>
	<TextBlock> Hallo World. </TextBlock>
	<TextBlock> {component1.getText()} </TextBlock>
	<TextBlock> {component1.getLangsText(langs.German)} </TextBlock>
	<TextBlock> {component2.getText()} </TextBlock>
</main>
<style>

</style>
<script>
	import { base } from "$app/paths";
    import Header from "./header.svelte";
	import TextBlock from "./textBlock.svelte"
	import {component1} from "./sampleText.js";
	import {component2} from "./sampleText.js";
	import {Dictionary} from "./dictionary.js";

	let langs = Dictionary.languages;
	Dictionary.currentLanguage = langs.Persian;
	let comp1text = component1.getText(langs.English);
</script>