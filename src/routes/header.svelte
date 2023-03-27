<main>
	<div class={"header-wrapper"}>
		<div class={"logo-wrapper"}>
			<p>{title.getText()}</p>
		</div>
		<div class={"nav-wrapper"}>
			<div class={"nav-item"} on:mouseover={() => legal_down = true} on:focus={{}} on:mouseleave={() => legal_down = false}>
				<div class={"nav-title"}>
					<p>{legal.getText()}</p> <Icon icon="ph:caret-down"/>
				</div>
				{#if legal_down}
					<div class={"dropdown-wrapper"}>
						<div class={"dropdown-item"}>
							<p>thing 1</p>
						</div>
						<div class={"dropdown-item"}>
							<p>thing 2</p>
						</div>
						<div class={"dropdown-item"}>
							<p>thing 3</p>
						</div>
					</div>
				{/if}
			</div>
			<div class={"nav-item"} on:mouseover={() => social_down = true} on:focus={{}} on:mouseleave={() => social_down = false}>
				<div class={"nav-title"}>
					<p>Social Services</p>&nbsp;<Icon icon="ph:caret-down"/>
				</div>
				{#if social_down}
					<div class={"dropdown-wrapper"}>
						<div class={"dropdown-item"}>
							<p>thing 1</p>
						</div>
						<div class={"dropdown-item"}>
							<p>thing 2</p>
						</div>
						<div class={"dropdown-item"}>
							<p>thing 3</p>
						</div>
					</div>
				{/if}
			</div>
			<div class={"nav-item"} on:mouseover={() => comm_down = true} on:focus={{}} on:mouseleave={() => comm_down = false}>
				<div class={"nav-title"}>
					<p>Community Building</p>&nbsp;<Icon icon="ph:caret-down"/>
				</div>
				{#if comm_down}
					<div class={"dropdown-wrapper"}>
						<div class={"dropdown-item"}>
							<p>thing 1</p>
						</div>
						<div class={"dropdown-item"}>
							<p>thing 2</p>
						</div>
						<div class={"dropdown-item"}>
							<p>thing 3</p>
						</div>
					</div>
				{/if}
			</div>
			<div class={"nav-item"} on:mouseover={() => lang_down = true} on:focus={{}} on:mouseleave={() => lang_down = false}>
				<div class={"nav-title"}>
					<p>Language</p>&nbsp;<Icon icon="ph:caret-down"/>
				</div>
				{#if lang_down}
					<div class={"dropdown-wrapper"} style={"right: 0; left: auto; text-align: right;"}>
						<div class={"dropdown-item"}>
							<p>thing 1</p>
						</div>
						<div class={"dropdown-item"}>
							<p>thing 2</p>
						</div>
						<div class={"dropdown-item"}>
							<p>thing 3</p>
						</div>
					</div>
				{/if}	
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
		padding: 2vmin;
		min-width: 15vw;
		border: 2px solid green;
	}

	.dropdown-item
	{
		
	}

	.nav-title:hover
	{
		color: blue;
	}
</style>
<script>
	import { base } from "$app/paths";
	import Icon from '@iconify/svelte';
	import {Dictionary} from "./dictionary.js";
	import {title} from "./headerText.js";
	import {legal} from "./headerText.js";
	
	let langs = Dictionary.languages;
	Dictionary.currentLanguage = langs.English;

	let legal_down = false;
	let social_down = false;
	let comm_down = false;
	let lang_down = false;
</script>