<main>
	<div class={"header-wrapper"}>
		<div class={"logo-wrapper"}>
			<p>{title.getText()}</p>
		</div>
		<div class={"nav-wrapper"}>
			<div class={"nav-item"}>
				<div class={"nav-title"}>
					<a href="{base}/legal">{legal.getText()}</a> <Icon icon="ph:caret-down"/>
				</div>
				<div class={"dropdown-wrapper"}>

				</div>
			</div>
			<div class={"nav-item"}>
				<div class={"nav-title"}>
					<p>Social Services</p>&nbsp;<Icon icon="ph:caret-down"/>
				</div>
				<div class={"dropdown-wrapper"}>

				</div>
			</div>
			<div class={"nav-item"}>
				<div class={"nav-title"}>
					<p>Community Building</p>&nbsp;<Icon icon="ph:caret-down"/>
				</div>
				<div class={"dropdown-wrapper"}>

				</div>
			</div>
			<div class={"nav-item"}>
				<div class={"nav-title"}>
					<Select options={[{"text":langs.English},{"text":langs.German},{"text":langs.Persian}]}
							display_func={o => o.text}
							bind:value={selected} on:change="{(o) => Dictionary.setCurrentLanguage(o.text())}"/>
					<p>Language</p>&nbsp;<Icon icon="ph:caret-down"/>
				</div>
				<div class={"dropdown-wrapper"}>

				</div>
			</div>
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

	.header-wrapper
	{
		border: 3px solid var(--primary-color);
		height: 8vmin;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo-wrapper
	{
		font-size: 2vmax;
		padding: 0 2vmin;
	}

	.nav-wrapper
	{
		display: flex;
		font-size: 1.3vmax;
	}

	.nav-title
	{
		display: flex;
		align-items: center;
		height: 8vmin;
		padding: 0 2vmin;
		border: 1px solid purple;
	}

	.dropdown-wrapper
	{
		position: absolute;
		height: 100px;
		width: 100%;
		border: 2px solid green;
		display: none;
	}

	.nav-title:hover
	{
		color: blue;
	}
</style>
<script>
	import { base } from "$app/paths";
	import Icon from '@iconify/svelte';
	import Select from "./Select.svelte";
	let selected;
	import {Dictionary} from "./dictionary.js";
	let langs = Dictionary.languages;
	import {title} from "./headerText.js";
	import {legal} from "./headerText.js";
	Dictionary.currentLanguage = langs.English;
</script>