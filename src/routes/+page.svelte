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
			<div class="title-divider"/>
			<p>{component.introText.getText()}</p>
		</div>
		<div class="tiles-container">
			<div class="tile center-text round-top-left" on:click={() => window.open(`${base}/legal`, "_self")} on:keypress={{}}>
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
			<div class="tile third center-text round-top-right" on:click={() => window.open(`${base}/community`, "_self")} on:keypress={{}}>
				<p>{component.community_body.getText()}</p>
				<div class="tile-cover center-text">
					<div class="icon-wrapper">
						<Icon icon="fluent:people-community-24-filled"/>
					</div>
					<p>{component.community_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text round-bottom-left" on:click={() => window.open(`${base}/NGOs`, "_self")} on:keypress={{}}>
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
			<div class="tile center-text round-bottom-right" on:click={() => window.open(`${base}/jobs`, "_self")} on:keypress={{}}>
				<p>{component.jobs_body.getText()}</p>
				<div class="tile-cover center-text">
					<div class="icon-wrapper">
						<Icon icon="ic:outline-work-outline"/>
					</div>
					<p>{component.jobs_title.getText()}</p>
				</div>
			</div>
		</div>
		<div class="footer-spacer"></div>
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

	.footer-spacer
	{
		height: 4rem;
	}

	.title-wrapper
	{
		display: flex; 
		justify-content: space-around;
		align-items: center;
		font-size: 2.5rem;
		font-weight: 500;
		margin: 4% 20%;
		color: var(--color7);
	}

	.title-divider
	{
		height: 3rem;
		background: var(--color4);
		width: 0.1rem;
		margin: 0 5%;
	}

	.tiles-container
	{
		margin: 2% 10%;
		display: flex;
		flex-wrap: wrap;
		gap: 2vh;
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
		font-size: 1.1rem;
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

	.round-top-left
	{
		border-start-start-radius: 2rem;
	}

	.round-top-right
	{
		border-start-end-radius: 2rem;
	}

	.round-bottom-left
	{
		border-end-start-radius: 2rem;
	}

	.round-bottom-right
	{
		border-end-end-radius: 2rem;
	}

	.icon-wrapper 
	{
		font-size: 3rem;
	}

	.tile:hover .tile-cover
	{
		display: none;
	}

	/* media queries */
	@media (min-width: 1800px)
	{

		.title-wrapper
		{
			font-size: 3.5rem;
		}

		.title-divider
		{
			height: 4rem;
			width: 0.2rem;
		}

		.tile
		{
			font-size: 1.8rem;
		}

		.tile-cover
		{
			font-size: 2.5rem;
		}

		.icon-wrapper 
		{
			font-size: 5rem;
		}
	}

	@media (max-width: 900px)
	{
		/* for horizontal title divider */
		.title-wrapper
		{
			flex-direction: column;
			text-align: center;
		}

		.title-divider
		{
			width: 50%;
			height: 0.1rem;
			margin: 5% 0;
		}

		.tile
		{
			width: 100%;
		}

		/* make it so only first and last tile in mobile view have rounded corners */
		.round-top-left
		{
			border-start-start-radius: 2rem;
			border-start-end-radius: 2rem;
		}

		.round-top-right
		{
			border-start-end-radius: 0.2rem;
		}

		.round-bottom-left
		{
			border-end-start-radius: 0.2rem;
		}

		.round-bottom-right
		{
			border-end-start-radius: 2rem;
			border-end-end-radius: 2rem;
		}

		.footer-spacer
		{
			height: 4rem;
		}
	}
	
	@media (max-width: 600px)
	{
		.title-wrapper
		{
			font-size: 2rem;
		}
	}
</style>
<script>
	import { base } from "$app/paths";
    import Header from "./header.svelte";
	import * as component from "./mainPage.js";
	import PageWrapper from "./pageWrapper.svelte";
	import Icon from "@iconify/svelte";
	import Footer from "./footer.svelte";
</script>