<svelte:head>
	<style>
		/* import urls for fonts (from google fonts) */
		/* font 1: Fira Sans */
		@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');
		/* font 2: Open Sans */
		@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
		/* font 3: ABeeZee */
		@import url('https://fonts.googleapis.com/css2?family=ABeeZee&display=swap');
		/* font 4: Nunito Sans */
		@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');
		</style>
</svelte:head>
<main dir={Dictionary.currentLanguage === Dictionary.languages.Persian ? "rtl" : "ltr"}
style={convertJSToCSS()}>
    <slot></slot>
	<button on:click={() => convertJSToCSS()}>test</button>
</main>
<style>
	*
	{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	main
	{
		background: #99c0ff;
		min-height: 100vh;
		font-family: var(--font4);
		/* necessary for margin on border of page */
		padding: 1px;
	}
</style>
<script>
	import { Dictionary } from "./dictionary";
	// import JS variables
	import * as theme_vars from "../theme";
	let langs = Dictionary.languages;
	if(typeof localStorage !== 'undefined'){
		Dictionary.currentLanguage = localStorage.getItem("language");
	}
	else{
		Dictionary.currentLanguage = langs.English;
	}

	
	function convertJSToCSS()
	{
		let res = ""; // css style string
		let theme_keys = Object.keys(theme_vars);  // var names in theme.js
		for(let key of theme_keys)
		{
			res += `--${key}: ${theme_vars[key]}; `;
		}
		return res;
	}
</script>