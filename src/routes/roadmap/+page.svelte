<svelte:head>
	<link rel="icon" href="./favicon.png" type="image/png" />
	<title>Immigration4Iran | {component.title.getText()}</title>
</svelte:head>
<main>
    <PageWrapper>
        <Header/>
        <div class="title-wrapper center-text">
			<p>{component.title.getText()}</p>
		</div>
		<div class="tiles-container">
			<div class="tile center-text round-top-left">
				<p>{component.step1_body.getText()}</p>
				<div class="tile-cover center-text">
					<p class="cover-num">1</p>
					<p>{component.step1_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text">
				<p>{component.step2_body.getText()}</p>
				<div class="tile-cover center-text">
					<p class="cover-num">2</p>
					<p>{component.step2_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text round-top-right">
				<p>{component.step3_body.getText()}</p>
				<div class="tile-cover center-text">
					<p class="cover-num">3</p>
					<p>{component.step3_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text">
				<p>{component.step4_body.getText()}</p>
				<div class="tile-cover center-text">
					<p class="cover-num">4</p>
					<p>{component.step4_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text">
				<p>
					{component.step51_body.getText()}
					<br />{component.step52_body.getText()}
					<br />{component.step53_body.getText()}	
				</p>
				<div class="tile-cover center-text">
					<p class="cover-num">5</p>
					<p>{component.step5_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text">
				<p>
					{component.step61_body.getText()}
					<a href={component.step62_body.getText()} target="_blank">{component.step62_body.getText()}</a>
				</p>
				<div class="tile-cover center-text">
					<p class="cover-num">6</p>
					<p>{component.step6_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text">
				<p>{component.step7_body.getText()}</p>
				<div class="tile-cover center-text">
					<p class="cover-num">7</p>
					<p>{component.step7_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text">
				<p>{component.step8_body.getText()}</p>
				<div class="tile-cover center-text">
					<p class="cover-num">8</p>
					<p>{component.step8_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text">
				<p>{component.step9_body.getText()}</p>
				<div class="tile-cover center-text">
					<p class="cover-num">9</p>
					<p>{component.step9_title.getText()}</p>
				</div>
			</div>
			<div class="tile center-text round-bottom-right round-bottom-left">
				<p>{component.step10_body.getText()}</p>
				<div class="tile-cover center-text">
					<p class="cover-num">10</p>
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
		display: flex; 
		justify-content: space-around;
		font-size: 2.5rem;
		font-weight: 700;
		margin: 4% 10%;
	}

	.tiles-container
	{
		margin: 0 10%;
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
		gap: 2%;
		background: var(--color4);
		color: var(--color7);
		font-size: 1.5rem;
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
	
	.cover-num
	{
		font-size: 2.5rem;
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
			font-size: 4rem;
		}

		.tiles-container
		{
			padding-bottom: 5%;
		}

		.tile
		{
			font-size: 1.8rem;
			padding: 4%;
		}

		.tile-cover
		{
			font-size: 2.2rem;
			gap: 2%;
		}

		.cover-num
		{
			font-size: 3.5rem;
		}
	}

	@media (max-width: 900px)
	{
		/* blocks take up entire width */
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

		.title-wrapper
		{
			font-size: 2.5rem;
			margin: 6% 10%;
		}

		.tiles-container
		{
			padding-bottom: 8%;
		}

		.tile
		{
			padding: 8%;
		}

		.tile-cover
		{
			gap: 3%;
		}
	
		.cover-num
		{
			font-size: 2rem;
		}
	}

	@media (max-width: 600px)
	{
		.title-wrapper
		{
			font-size: 2.2rem;
		}

		.tiles-container
		{
			padding-bottom: 10%;
		}

		.tile
		{
			font-size: 1rem;
			padding: 8%;
		}

		.tile-cover
		{
			font-size: 1.4rem;
			gap: 3%;
		}
	}
</style>

<script>
    import * as component from "./roadmapText.js";
    import PageWrapper from "../pageWrapper.svelte";
    import Header from "../header.svelte";
</script>