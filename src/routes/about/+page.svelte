<main>
	<PageWrapper>
		<Header/>
		<div class="title-wrapper">
			<p> {component.about_title.getText()} </p>
		</div>
		<div class="body-wrapper">
			<p>
				{component.about_body.getText()}
				<MyLink
					link={component.about_link.getText()}
					text="digital.wpi.edu"
				/>.
			</p>
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
		font-size: 3rem;
		font-weight: 700;
		display: flex;
		justify-content: center;
		margin: 4%;
	}

	.body-wrapper
	{
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		margin: 0 20%;
		font-size: 1.5rem;
	}

	/* media queries */
	@media (min-width: 1800px)
	{
		.title-wrapper
		{
			font-size: 4rem;
		}

		.body-wrapper
		{
			font-size: 2.2rem;
		}
	}

	@media (max-width: 900px)
	{
		.title-wrapper
		{
			font-size: 2.5rem;
			margin: 6%;
		}

		.body-wrapper
		{
			margin: 0 15%;
			font-size: 1.3rem;
		}
	}
	
	@media (max-width: 600px)
	{
		.title-wrapper
		{
			margin: 8%;
		}

		.body-wrapper
		{
			margin: 0 12%;
			font-size: 1.2rem;
		}
	}
</style>
<script>
	import * as component from "./aboutText.js"; 
	import MyLink from "../myLink.svelte";
	import PageWrapper from "../pageWrapper.svelte";
	import Header from "../header.svelte";
</script>