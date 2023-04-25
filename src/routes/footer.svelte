<main style={convertJSToCSS()}>
	<div class="footer-wrapper">
		<div class="footer-item" on:click={() => openTerms()} on:keypress={{}}>
			<p>Terms of Use</p>
		</div>
		<div class="footer-item" on:click={() => openAbout()} on:keypress={{}}>
			<p>About us</p>
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

	main
	{
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
	}
	
	.footer-wrapper
	{
		display: flex;
		justify-content: flex-end;
		background: var(--color1);
		color: var(--color8);
	}

	.footer-item
	{
		padding: 1.5% 2%;
		font-size: 1.2rem;
	}

	.footer-item:hover
	{
		background: var(--color9);
		cursor: pointer;
	}
</style>
<script>
	import { base } from "$app/paths";
	import {Dictionary} from "./dictionary.js";
	import * as theme_vars from "../theme.js"

	function convertJSToCSS()
	{
		let res = ""; // css style string
		let theme_keys = Object.keys(theme_vars);  // var names in theme.js
		// iterate through vars in theme.js and add to style string
		for(let key of theme_keys)
		{
			res += `--${key}: ${theme_vars[key]}; `;
		}
		return res;
	}

	function openAbout()
	{
		window.open(`${base}/about`, "_self");
	}

	function openTerms()
	{
		window.open(`${base}/terms`, "_self");
	}
</script>