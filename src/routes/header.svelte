<main>
	<div class="header-wrapper">
		<div class="logo-wrapper" >
			<p on:click={() => openHome()} on:keypress={{}}>{title.getText()}</p>
		</div>
		<div class="nav-wrapper">
			<div class="nav-item" on:mouseover={() => toggleDropDown(legal_dropdown, true)} on:mouseleave={() => toggleDropDown(legal_dropdown, false)} on:focus={{}}>
				<div class="nav-title" on:click={() => openLegal()} on:keypress={{}}>
					<p>{legal.getText()}</p>&nbsp;<Icon icon="ph:caret-down"/>
				</div>
				<div bind:this={legal_dropdown} class="dropdown-wrapper">
					<div class="dropdown-item">
						<p>thing 1</p>
					</div>
					<div class="dropdown-item">
						<p>thing 2</p>
					</div>
					<div class="dropdown-item">
						<p>thing 3</p>
					</div>
				</div>
			</div>
			<div class="nav-item" on:mouseover={() => toggleDropDown(social_dropdown, true)} on:mouseleave={() => toggleDropDown(social_dropdown, false)} on:focus={{}}>
				<div class="nav-title" on:click={() => openSocial()} on:keypress={{}}>
					<p>Social Services</p>&nbsp;<Icon icon="ph:caret-down"/>
				</div>
				<div bind:this={social_dropdown} class="dropdown-wrapper">
					<div class="dropdown-item">
						<p>thing 1</p>
					</div>
					<div class="dropdown-item">
						<p>thing 2</p>
					</div>
					<div class="dropdown-item">
						<p>thing 3</p>
					</div>
				</div>
			</div>
			<div class="nav-item" on:mouseover={() => toggleDropDown(comm_dropdown, true)} on:mouseleave={() => toggleDropDown(comm_dropdown, false)} on:focus={{}}>
				<div class="nav-title" on:click={() => openComm()} on:keypress={{}}>
					<p>Community Building</p>&nbsp;<Icon icon="ph:caret-down"/>
				</div>
				<div bind:this={comm_dropdown} class="dropdown-wrapper">
					<div class="dropdown-item">
						<p>thing 1</p>
					</div>
					<div class="dropdown-item">
						<p>thing 2</p>
					</div>
					<div class="dropdown-item">
						<p>thing 3</p>
					</div>
				</div>
			</div>
			<div class="nav-item" on:mouseover={() => toggleDropDown(lang_dropdown, true)} on:mouseleave={() => toggleDropDown(lang_dropdown, false)} on:focus={{}}>
				<div class="nav-title">
					<p>Language</p>&nbsp;<Icon icon="ph:caret-down"/>
				</div>
				<div bind:this={lang_dropdown} class="dropdown-wrapper">
					<ul>
						{#each langsITR as lang}
							<div class="dropdown-item" on:click={() => changeLanguage(lang)}>
								<p>{lang}</p>
							</div>
						{/each}
					</ul>
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
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: var(--color3);
	}

	.logo-wrapper
	{
		font-size: 2rem;
		padding: 0 1%;
	}

	.nav-wrapper
	{
		display: flex;
		font-size: 1.3rem;
	}

	.nav-item
	{
		position: relative;
		display: flex;
	}

	.nav-title
	{
		position: relative;
		display: flex;
		align-items: center;
		padding: 8% 1vw;
		position: relative;
		z-index: 2;
		background: var(--color3);
		justify-content: space-between;
	}

	.dropdown-wrapper
	{
		position: absolute;
		top: 100%;
		min-width: 100%;
		border-radius: 0 0 0.2em 0.2rem;
		overflow: hidden;
		z-index: 1;
		transform-origin: top;
		transform: scaleY(0);
		/* uncomment for animated menus */
		/* transition: 0.3s ease-in-out; */
	}
/*  */
	.dropdown-item
	{
		padding: 1vh;
		background: var(--color3);
	}

	.nav-title, .dropdown-item, .logo-wrapper p
	{
		cursor: pointer;
	}

	.nav-title:hover, .dropdown-item:hover
	{
		color: var(--color1);
		background: var(--color4);
	}
</style>
<script>
	import { base } from "$app/paths";
	import Icon from '@iconify/svelte';
	import {Dictionary} from "./dictionary.js";
	import {title} from "./headerText.js";
	import {legal} from "./headerText.js";
	
	let langs = Dictionary.languages;
	let langsITR = Object.values(langs);
	Dictionary.currentLanguage = langs.English;

	let legal_dropdown;
	let social_dropdown;
	let comm_dropdown;
	let lang_dropdown;

	function toggleDropDown(dropdown, status)
	{
		dropdown.style.transform = status ? "scaleY(1)" : "scaleY(0)";
	}

	function changeLanguage(language)
	{
		Dictionary.currentLanguage = language;
		//refresh somehow
	}

	function openHome()
	{
		window.open(`${base}/`, "_self");
	}

	function openLegal()
	{
		window.open(`${base}/legal`, "_self");
	}

	function openSocial()
	{
		window.open(`${base}/social`, "_self");
	}

	function openComm()
	{
		window.open(`${base}/community`, "_self");
	}
</script>