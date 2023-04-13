<main>
    <PageWrapper>
        <Header/>
        <div class="title-wrapper">
			<h1>{component.title.getText()}</h1>
			<h1>|</h1>
			<h1>The Asylum Roadmap</h1>
		</div>

        <div class="big-wrapper">
            <div class="tile-wrapper">
                <div class="tile-back" style="background:#348888;">
                    {component.step1_body.getText()}
                </div>
                <div class="tile-front" style="background:#DAFDBA">
                    {component.step1_title.getText()}
                </div>
            </div>
            <div class="tile-wrapper">
                <div class="tile-back" style="background:#22BABB">
                    {component.step2_body.getText()}
                </div>
                <div class="tile-front" style="background:#9AEBA3">
                    {component.step2_title.getText()}
                </div>
            </div>
            <div class="tile-wrapper">
                <div class="tile-back" style="background:#9EF8EE;">
                    {component.step3_body.getText()}
                </div>
                <div class="tile-front" style="background:#45C4B0">
                    {component.step3_title.getText()}
                </div>
            </div>
            <div class="tile-wrapper">
                <div class="tile-back" style="background:#FA7F08">
                    {component.step4_body.getText()}
                </div>
                <div class="tile-front" style="background:#1d678A">
                    {component.step4_title.getText()}
                </div>
            </div>
        </div>

        <div class="big-wrapper">
            <div class="tile-wrapper">
                <div class="tile-back" style="background:#348888;">
                    {component.step51_body.getText()}
                    <br />{component.step52_body.getText()}
                    <br />{component.step53_body.getText()}
                </div>
                <div class="tile-front" style="background:#DAFDBA">
                    {component.step5_title.getText()}
                </div>
            </div>
            <div class="tile-wrapper">
                <div class="tile-back" style="background:#22BABB">
                    {component.step6_body.getText()}
                </div>
                <div class="tile-front" style="background:#9AEBA3">
                    {component.step6_title.getText()}
                </div>
            </div>
            <div class="tile-wrapper">
                <div class="tile-back" style="background:#9EF8EE;">
                    {component.step7_body.getText()}
                </div>
                <div class="tile-front" style="background:#45C4B0">
                    {component.step7_title.getText()}
                </div>
            </div>
            <div class="tile-wrapper">
                <div class="tile-back" style="background:#FA7F08">
                    {component.step8_body.getText()}
                </div>
                <div class="tile-front" style="background:#1d678A">
                    {component.step8_title.getText()}
                </div>
            </div>
        </div>

        <div class="big-wrapper">
            <div class="tile-wrapper">
                <div class="tile-back" style="background:#348888;">
                    {component.step9_body.getText()}
                </div>
                <div class="tile-front" style="background:#DAFDBA">
                    {component.step9_title.getText()}
                </div>
            </div>
            <div class="tile-wrapper">
                <div class="tile-back" style="background:#22BABB">
                    {component.step10_body.getText()}
                </div>
                <div class="tile-front" style="background:#9AEBA3">
                    {component.step10_title.getText()}
                </div>
            </div>
        </div>
        
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
		margin: 3% 0;
		margin: 4% 25%;
	}

    .big-wrapper
    {
        display: flex;
        justify-content: center;
		gap: 1%;
        padding-bottom: 1%;
    }

    .tile-wrapper
    {
        position: relative;
        height: 350px;
        width: 250px;
    }

    .tile-front
    {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
		border-radius: 0.2rem;
    }

    .tile-back
    {
        position: absolute;
        height: 100%;
        width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 5%;
		border-radius: 0.2rem;
    }
    
    .tile-front:hover
    {
        opacity: 0;
        transition: opacity 0.1s;
    }
</style>

<script>
    import TextBlock from "../textBlock.svelte";
    import {Dictionary} from "../dictionary.js";
    import * as component from "./legalText.js";
    import PageWrapper from "../pageWrapper.svelte";
    import Header from "../header.svelte";
</script>