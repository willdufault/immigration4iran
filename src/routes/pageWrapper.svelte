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
<!-- assign JS variables to CSS variables -->
<!-- to use these variables in styling, use var(--[variable name]) -->
<!-- ex: if you wanted to assign something to be the color stored in color1, you would do:
	
		color: var(--color1);

-->
<main dir={Dictionary.currentLanguage === Dictionary.languages.Persian ? "rtl" : "ltr"} style="
	--color1: {color1}; 
	--color2: {color2}; 
	--color3: {color3}; 
	--color4: {color4}; 
	--font1: {font1};
	--font2: {font2};
	--font3: {font3};
	--font4: {font4};
	"
	>
    <slot></slot>
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
		/* causes issues with margin on bottom element, temporarily in app.html */
		/* background: #99c0ff; */
		min-height: 100vh;
		font-family: var(--font4);
	}
</style>
<script>
	import { Dictionary } from "./dictionary";
	// import JS variables
	import { color1, color2, color3, color4, font1, font2, font3, font4} from "../theme";
</script>