<main>
	<div class="header-wrapper">
		<div class="logo-wrapper" on:click={() => openHome()} on:keypress={{}}>
			<div class="logo-crossfade">
				<img class="crossfade-top" src="/logo.png" alt="Immigration4Iran Logo"/>
				<img class="crossfade-bottom" src="/logo-alt.png" alt="Immigration4Iran Logo Alt"/>
			</div>
			<p>{component.title.getText()}</p>
		</div>

		<!-- desktop nav menu -->
		
		<div class="desktop nav-wrapper">
			<div class="nav-item" on:mouseover={() => toggleDropDown(legal_dropdown, true)} on:mouseleave={() => toggleDropDown(legal_dropdown, false)} on:focus={{}}>
				<div class="nav-title" on:click={() => openLegal()} on:keypress={{}}>
					<p>{component.legal.getText()}</p>&nbsp;<Icon icon="ph:caret-down"/>
				</div>
				<div bind:this={legal_dropdown} class="dropdown-wrapper">
					<div class="dropdown-item" on:click={() => openRoadmap()} on:keypress={{}}>
						<p>{component.roadmap.getText()}</p> <!-- "Legal Roadmap" goes onto two lines -->
					</div>
				</div>
			</div>
			<div class="nav-item" on:mouseover={() => toggleDropDown(social_dropdown, true)} on:mouseleave={() => toggleDropDown(social_dropdown, false)} on:focus={{}}>
				<div class="nav-title" on:click={() => openSocial()} on:keypress={{}}>
					<p>{component.social.getText()}</p>&nbsp;<Icon icon="ph:caret-down"/>
				</div>
				<div bind:this={social_dropdown} class="dropdown-wrapper">
					<div class="dropdown-item" on:click={() => openJobs()} on:keypress={{}}>
						<p>{component.jobs.getText()}</p>
					</div>
					<div class="dropdown-item" on:click={() => openHousing()} on:keypress={{}}>
						<p>{component.housing.getText()}</p>
					</div>
					<div class="dropdown-item" on:click={() => openEducation()} on:keypress={{}}>
						<p>{component.education.getText()}</p>
					</div>
				</div>
			</div>
			<div class="nav-item" on:mouseover={() => toggleDropDown(comm_dropdown, true)} on:mouseleave={() => toggleDropDown(comm_dropdown, false)} on:focus={{}}>
				<div class="nav-title" on:click={() => openCommunity()} on:keypress={{}}>
					<p>{component.community.getText()}</p>&nbsp;<Icon icon="ph:caret-down"/>
				</div>
				<div bind:this={comm_dropdown} class="dropdown-wrapper">
					<div class="dropdown-item" on:click={() => openNGO()} on:keypress={{}}>
						<p>{component.ngos.getText()}</p>
					</div>
					<div class="dropdown-item" on:click={() => openForum()} on:keypress={{}}>
						<p>{component.forum.getText()}</p>
					</div>
				</div>
			</div>
			<div class="nav-item" on:mouseover={() => toggleDropDown(lang_dropdown, true)} on:mouseleave={() => toggleDropDown(lang_dropdown, false)} on:focus={{}}>
				<div class="nav-title" style="cursor: default">
					<p>{component.language.getText()}</p>&nbsp;<Icon icon="ph:caret-down"/>
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

		<!-- mobile nav menu -->
		<!-- !BUG: you can scroll the page through the nav menu -->

		<div class="mobile mobile-nav-wrapper">
			<div class="mobile-menu-icon-wrapper" on:click={() => openMobileMenu()} on:keypress={{}}>
				<Icon icon="ic:round-menu"/>
			</div>
			<div bind:this={mobile_menu} class="mobile-nav-menu">
				<div class="mobile-close-menu-icon-wrapper" on:click={() => closeMobileMenu()} on:keypress={{}}>
					<Icon icon="tabler:x" />
				</div>
				<div class="mobile-nav-item" on:click={() => openLegal()} on:keypress={{}}>
					<p>{component.legal.getText()}</p>
				</div>
				<hr class="mobile-menu-divider"/>
				<div class="mobile-nav-item" on:click={() => openRoadmap()} on:keypress={{}}>
					<p>
						&nbsp;&nbsp;
						{component.roadmap.getText()}
					</p>
				</div>
				<br/>
				<div class="mobile-nav-item" on:click={() => openJobs()} on:keypress={{}}>
					<p>{component.social.getText()}</p>
				</div>
				<hr class="mobile-menu-divider"/>
				<div class="mobile-nav-item" on:click={() => openJobs()} on:keypress={{}}>
					<p>
						&nbsp;&nbsp;
						{component.jobs.getText()}
					</p>
				</div>
				<div class="mobile-nav-item" on:click={() => openHousing()} on:keypress={{}}>
					<p>
						&nbsp;&nbsp;
						{component.housing.getText()}
					</p>
				</div>
				<div class="mobile-nav-item" on:click={() => openEducation()} on:keypress={{}}>
					<p>
						&nbsp;&nbsp;
						{component.education.getText()}
					</p>
				</div>
				<br/>
				<div class="mobile-nav-item" on:click={() => openCommunity()} on:keypress={{}}>
					<p>{component.community.getText()}</p>
				</div>
				<hr class="mobile-menu-divider"/>
				<div class="mobile-nav-item" on:click={() => openNGO()} on:keypress={{}}>
					<p>
						&nbsp;&nbsp;
						{component.ngos.getText()}
					</p>
				</div>
				<div class="mobile-nav-item" on:click={() => openForum()} on:keypress={{}}>
					<p>
						&nbsp;&nbsp;
						{component.forum.getText()}
					</p>
				</div>
				<br/>
				<div class="mobile-nav-item">
					<p>{component.language.getText()}</p>
				</div>
				<hr class="mobile-menu-divider"/>
				<ul>
					{#each langsITR as lang}
						<div class="mobile-nav-item" on:click={() => changeLanguage(lang)} on:keypress={{}}>
							<p>
								&nbsp;&nbsp;
								{lang}
							</p>
						</div>
					{/each}
				</ul>
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

	.desktop
	{
		display: initial;
	}

	.header-wrapper
	{
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: var(--color1);
		color: var(--color8);
	}

	.logo-crossfade
	{
		position: relative;
		height: 4rem;
		width: 4rem;
	}

	.logo-crossfade img
	{
		position: absolute;
		height: 4rem;
		width: 4rem;
		left: 0;
		right: 0;
	}
	
	.crossfade-top
	{
		z-index: 1;
	}

	.logo-wrapper
	{
		font-size: 1.8rem;
		font-weight: 700;
		padding: 0 1%;
		display: flex;
		gap: 0.5rem;
		justify-content: center;
		align-items: center;
	}

	.logo-wrapper img, .logo-wrapper p
	{
		transition: 0.2s ease-in-out;
	}

	.logo-wrapper:hover
	{
		color: var(--color4);
	}

	.logo-wrapper:hover .crossfade-top
	{
		opacity: 0;
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

	.nav-title, .dropdown-item, .logo-wrapper
	{
		cursor: pointer;
	}

	.nav-title:hover, .dropdown-item:hover
	{
		/* color: var(--color1); */
		background: var(--color9);
	}

	.mobile
	{
		display: none;
	}

	.mobile-menu-icon-wrapper
	{
		font-size: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		padding: 1vh;
	}

	.mobile-nav-menu
	{
		position: fixed;
		top: 0;
		right: -100%;
		height: 100vh;
		width: 100vw;
		background: var(--color1);
		color: var(--color2);
		z-index: 2;
		padding: 8% 10%;
		overflow-y: scroll;
		transition: 0.4s ease-in-out;
	}

	.mobile-close-menu-icon-wrapper
	{
		font-size: 3rem;
		position: absolute;
		margin: 1vh;
		top: 0;
		right: 0;
		cursor: pointer;
	}

	.mobile-nav-item
	{
		font-size: 2rem;
	}

	.mobile-menu-divider
	{
		border-top: 0.1rem solid var(--color2);
	}

	/* media queries */
	@media (min-width: 1800px)
	{
		.logo-wrapper
		{
			font-size: 3rem;
			padding: 0 2%;
		}
		
		.nav-wrapper
		{
			font-size: 2rem;
		}

		.logo-crossfade
		{
			height: 6rem;
			width: 6rem;
		}

		.logo-crossfade img
		{
			height: 6rem;
			width: 6rem;
		}
	}
	
	@media (max-width: 900px)
	{
		.desktop
		{
			display: none;
		}

		.mobile
		{
			display: block;
		}
	}

	@media (max-width: 600px)
	{}
</style>
<script>
	import { base } from "$app/paths";
	import Icon from '@iconify/svelte';
	import {Dictionary} from "./dictionary.js";
	import * as component from "./headerText.js";
	
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
	let mobile_menu;

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

	function openMobileMenu()
	{
		mobile_menu.style.right = 0;
	}

	function closeMobileMenu()
	{
		mobile_menu.style.right = "-100%";
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

	function openCommunity()
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

	function openEducation()
	{
		window.open(`${base}/education`, "_self")
	}

	function openRoadmap()
	{
		window.open(`${base}/roadmap`, "_self")
	}

	function openForum()
	{
		window.open(`${base}/forum`, "_self")
	}
</script>