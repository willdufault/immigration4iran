<!-- 

	TODO: NEED TO PUT MANUAL TILE STYLE COLORS IN THEME.JS AND CONFIGURE THAT

 -->

<main>
    <PageWrapper>
        <Header/>
        <div class="title-wrapper">
			<p>{component.title.getText()}</p>
			<p>|</p>
			<p>The Asylum Roadmap</p>
		</div>
		<div class="tiles-container">
			<div class="tile center-text" style="background:#348888;">
				<p>{component.step1_body.getText()}</p>
				<div class="tile-cover center-text" style="background:#DAFDBA">
					<p>{component.step1_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text" style="background:#22BABB;">
				<p>{component.step2_body.getText()}</p>
				<div class="tile-cover center-text" style="background:#9AEBA3">
					<p>{component.step2_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text" style="background:#9EF8EE;">
				<p>{component.step3_body.getText()}</p>
				<div class="tile-cover center-text" style="background:#45C4B0">
					<p>{component.step3_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text" style="background:#FA7F08;">
				<p>{component.step4_body.getText()}</p>
				<div class="tile-cover center-text" style="background:#1d678A">
					<p>{component.step4_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text" style="background:#348888;">
				<p>
					{component.step51_body.getText()}
					<br />{component.step52_body.getText()}
					<br />{component.step53_body.getText()}	
				</p>
				<div class="tile-cover center-text" style="background:#DAFDBA">
					<p>{component.step5_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text" style="background:#22BABB;">
				<p>
					{component.step61_body.getText()}
					<a href={component.step62_body.getText()} target="_blank">{component.step62_body.getText()}</a>
				</p>
				<div class="tile-cover center-text" style="background:#9AEBA3">
					<p>{component.step6_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text" style="background:#9EF8EE;">
				<p>{component.step7_body.getText()}</p>
				<div class="tile-cover center-text" style="background:#45C4B0">
					<p>{component.step7_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text" style="background:#FA7F08;">
				<p>{component.step8_body.getText()}</p>
				<div class="tile-cover center-text" style="background:#1d678A">
					<p>{component.step8_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text" style="background:#348888;">
				<p>{component.step9_body.getText()}</p>
				<div class="tile-cover center-text" style="background:#DAFDBA">
					<p>{component.step9_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text" style="background:#22BABB;">
				<p>{component.step10_body.getText()}</p>
				<div class="tile-cover center-text" style="background:#9AEBA3">
					<p>{component.step10_title.getText()}</p>
				</div>
			</div>
		</div>

        <!-- <div class="big-wrapper">

        <div class="big-wrapper">
            <div class="tile-wrapper">
                <div class="tile-back" style="background:#22BABB">
                    {component.step10_body.getText()}
                </div>
                <div class="tile-front" style="background:#9AEBA3">
                    {component.step10_title.getText()}
                </div>
            </div>
        </div> -->
        
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
		margin: 0 20%; 
		display: flex; 
		justify-content: space-around;
		font-size: 2.5rem;
		font-weight: 500;
		margin: 4% 10%;
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
		position: relative;
		padding: 5%;
		min-height: 30vh;
		width: 30%;
		display: flex;
		flex-grow: 1;
		border-radius: 0.2rem;
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
	}

	.tile:hover .tile-cover
	{
		display: none;
	}
</style>

<script>
    import TextBlock from "../textBlock.svelte";
    import {Dictionary} from "../dictionary.js";
    import * as component from "./legalText.js";
    import PageWrapper from "../pageWrapper.svelte";
    import Header from "../header.svelte";
</script>