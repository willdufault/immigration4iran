<main>
	<div class="header-wrapper">
		<div class="logo-wrapper" >
			<!-- <p on:click={() => openHome()} on:keypress={{}}>{title.getText()}</p> -->
			<p on:click={() => openHome()} on:keypress={{}}>{title.getText()}</p>
		</div>
		<div class="nav-wrapper">
			<div class="nav-item" on:mouseover={() => toggleDropDown(legal_dropdown, true)} on:mouseleave={() => toggleDropDown(legal_dropdown, false)} on:focus={{}}>
				<div class="nav-title" on:click={() => openLegal()} on:keypress={{}}>
					<p>{legal.getText()}</p>&nbsp;<Icon icon="ph:caret-down"/>
				</div>
				<div bind:this={legal_dropdown} class="dropdown-wrapper">
					<div class="dropdown-item" on:click={() => openRoadmap()} on:keypress={{}}>
						<p>Roadmap</p> <!-- "Legal Roadmap" goes onto two lines -->
					</div>
				</div>
			</div>
			<div class="nav-item" on:mouseover={() => toggleDropDown(social_dropdown, true)} on:mouseleave={() => toggleDropDown(social_dropdown, false)} on:focus={{}}>
				<div class="nav-title" on:click={() => openSocial()} on:keypress={{}}>
					<p>Social Services</p>&nbsp;<Icon icon="ph:caret-down"/>
				</div>
				<div bind:this={social_dropdown} class="dropdown-wrapper">
					<div class="dropdown-item" on:click={() => openJobs()} on:keypress={{}}>
						<p>Jobs</p>
					</div>
					<div class="dropdown-item" on:click={() => openHousing()} on:keypress={{}}>
						<p>Housing</p>
					</div>
					<div class="dropdown-item" on:click={() => openEdu()} on:keypress={{}}>
						<p>Education</p>
					</div>
				</div>
			</div>
			<div class="nav-item" on:mouseover={() => toggleDropDown(comm_dropdown, true)} on:mouseleave={() => toggleDropDown(comm_dropdown, false)} on:focus={{}}>
				<div class="nav-title" on:click={() => openComm()} on:keypress={{}}>
					<p>Community Building</p>&nbsp;<Icon icon="ph:caret-down"/>
				</div>
				<div bind:this={comm_dropdown} class="dropdown-wrapper">
					<div class="dropdown-item" on:click={() => openNGO()} on:keypress={{}}>
						<p>NGOs</p>
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
							<div class="dropdown-item" on:click={() => changeLanguage(lang)} on:keypress={{}}>
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
		background: var(--color1);
		color: var(--color8);
	}

	.logo-wrapper
	{
		font-size: 1.8rem;
		font-weight: 700;
		padding: 0 1%;
	}

	.logo-wrapper:hover
	{
		color: var(--color4);
	}

	.nav-wrapper
	{
		display: flex;
		font-size: 1.2rem;
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
		padding: 10% 1vw;
		z-index: 2;
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
		/* transition: 0.2s ease-in-out; */
	}

	.dropdown-item
	{
		padding: 1.5vh;
		background: var(--color1);
	}

	.nav-title, .dropdown-item, .logo-wrapper p
	{
		cursor: pointer;
	}

	.nav-title:hover, .dropdown-item:hover
	{
		/* color: var(--color1); */
		background: var(--color9);
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
	if(typeof localStorage !== 'undefined'){
		Dictionary.currentLanguage = localStorage.getItem("language");
	}
	else{
		Dictionary.currentLanguage = langs.English;
	}


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
		localStorage.setItem("language", language);
		Dictionary.setCurrentLanguage(localStorage.getItem("language"));
		Dictionary.currentLanguage = language;
		localStorage.setItem("language", language);
		location.reload();
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

	function openNGO()
	{
		window.open(`${base}/NGOs`, "_self")
	}

	function openJobs()
	{
		window.open(`${base}/jobs`, "_self")
	}

	function openHousing()
	{
		window.open(`${base}/housing`, "_self")
	}

	function openEdu()
	{
		window.open(`${base}/education`, "_self")
	}

	function openRoadmap()
	{
		window.open(`${base}/roadmap`, "_self")
	}
</script>