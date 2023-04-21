<svelte:head>
	<link rel="icon" href="./favicon.png" type="image/png" />
	<title>Immigration4Iran</title>
</svelte:head>
<!-- flip for right-to-left (rtl) languages -->
<!-- to add languages, add "|| [language]" (|| = or) after Persian for every additional rtl language -->
<main>
	<PageWrapper>
		<Header/>
        <div class="title-wrapper">
			<p>{component.intro.getText()}</p>
			<p>|</p>
			<p>{component.introText.getText()}</p>
		</div>
		<div class="tiles-container">
			<div class="tile center-text" on:click={() => window.open(`${base}/legal`, "_self")} on:keypress={{}}>
				<p>{component.legal_body.getText()}</p>
				<div class="tile-cover center-text">
					<div class="icon-wrapper">
						<Icon icon="mdi:legal"/>
					</div>
					<p>{component.legal_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text" on:click={() => window.open(`${base}/social`, "_self")} on:keypress={{}}>
				<p>{component.social_body.getText()}</p>
				<div class="tile-cover center-text">
					<div class="icon-wrapper">
						<Icon icon="medical-icon:i-social-services"/>
					</div>
					<p>{component.social_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text" on:click={() => window.open(`${base}/community`, "_self")} on:keypress={{}}>
				<p>{component.community_body.getText()}</p>
				<div class="tile-cover center-text">
					<div class="icon-wrapper">
						<Icon icon="fluent:people-community-24-filled"/>
					</div>
					<p>{component.community_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text" on:click={() => window.open(`${base}/NGOs`, "_self")} on:keypress={{}}>
				<p>{component.ngo_body.getText()}</p>
				<div class="tile-cover center-text">
					<div class="icon-wrapper">
						<Icon icon="mdi:building"/>
					</div>
					<p>{component.ngo_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text" on:click={() => window.open(`${base}/education`, "_self")} on:keypress={{}}>
				<p>{component.edu_body.getText()}</p>
				<div class="tile-cover center-text">
					<div class="icon-wrapper">
						<Icon icon="mdi:education-outline"/>
					</div>
					<p>{component.edu_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text" on:click={() => window.open(`${base}/jobs`, "_self")} on:keypress={{}}>
				<p>{component.jobs_body.getText()}</p>
				<div class="tile-cover center-text">
					<div class="icon-wrapper">
						<Icon icon="ic:outline-work-outline"/>
					</div>
					<p>{component.jobs_title.getText()}</p>
				</div>
			</div>
		</div>
		<div class="footer-spacer" style="margin: 8%"></div>
		<Footer/>
	</PageWrapper>
</main>
<style>
	*
	{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.title-wrapper
	{
		display: flex; 
		justify-content: space-around;
		font-size: 2.5rem;
		font-weight: 500;
		margin: 4% 20%;
		color: var(--color7);
	}

	.tiles-container
	{
		margin: 0 10%;
		display: flex;
		flex-wrap: wrap;
		gap: 2%;
		row-gap: 2vh;
		padding-bottom: 5%;
	}

	.center-text
	{
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.tile
	{
		/* font-size: 1.1rem; */
		cursor: pointer;
		position: relative;
		padding: 5%;
		min-height: 30vh;
		width: 30%;
		display: flex;
		flex-grow: 1;
		border-radius: 0.2rem;
		background: var(--color5);
		color: var(--color7);
	}

	.tile-cover
	{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: inherit;
		padding: inherit;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 1.5rem;
		background: var(--color4);
		color: var(--color7);

	}


	.icon-wrapper 
	{
		font-size: 3rem;
	}

	.tile:hover .tile-cover
	{
		display: none;
	}
</style>
<script>
	import { base } from "$app/paths";
    import Header from "./header.svelte";
	import TextBlock from "./textBlock.svelte";
	import * as component from "./mainPage.js";
	import {Dictionary} from "./dictionary.js";
	import PageWrapper from "./pageWrapper.svelte";
	import Icon from "@iconify/svelte";
	import Footer from "./footer.svelte";
</script>