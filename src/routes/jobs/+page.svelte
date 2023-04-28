<svelte:head>
	<link rel="icon" href="./favicon.png" type="image/png" />
	<title>Immigration4Iran | {component.title.getText()}</title>
</svelte:head>
<main>
	<PageWrapper>
		<Header/>
		<div class="title-wrapper">
			<p class="title">{component.title.getText()}</p>
		</div>
		<div class="blocks-wrapper">
			<TextBlock>
				<MyLink
					slot="title"
					link="https://europa.eu/europass/eportfolio/screen/cv-editor?lang=en&previous=https:%2F%2Feuropa.eu%2Feuropass%2Fen"
					text={component.ll_title.getText()}/>
				<p slot="body">{component.ll_body.getText() }</p>
			</TextBlock>
			
			<TextBlock>
				<MyLink
					slot="title"
					link="https://europa.eu/europass/eportfolio/screen/cover-letter-editor?lang=en&previous=https:%2F%2Feuropa.eu%2Feuropass%2Fen"
					text={component.cl_title.getText()}/>
				<p slot="body"> {component.cl_body.getText()} </p>
			</TextBlock>

			<TextBlock>
				<p slot="title"> {component.jobs_title.getText()} </p>
				<div slot="body">
					<p> {component.jobs_body1.getText()} </p>
					<ul style="margin:1em">
						<li>
							<MyLink
								link="https://{component.jobs_list[0]}"
								text={component.jobs_list[0]}/>
						</li>
						<li>
							<MyLink
								link="https://{component.jobs_list[1]}"
								text={component.jobs_list[1]}/>
						</li>
						<li>
							<MyLink
								link="https://{component.jobs_list[2]}"
								text={component.jobs_list[2]}/>
						</li>
						<li>
							<MyLink
								link="https://{component.jobs_list[3]}"
								text={component.jobs_list[3]}/>
						</li>
						<li>
							<MyLink
								link="https://{component.jobs_list[4]}"
								text={component.jobs_list[4]}/>
						</li>
					</ul>
					<p> {component.jobs_body2.getText()}
						<MyLink
						link="https://{component.jobs_link.getText()}"
						text={component.jobs_link.getText()}/>
					</p>
				</div>
			</TextBlock>
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
		display: flex;
		justify-content: center;
		margin: 3%;
		font-size: 3rem;
		font-weight: 700;
	}

	.blocks-wrapper
	{
		margin: 0 5%;
	}

	/* media queries */
	@media (min-width: 1800px)
	{
		.title-wrapper
		{
			font-size: 4rem;
			margin: 5%
		}
	}

	@media (max-width: 900px)
	{
		.title-wrapper
		{
			font-size: 2.5rem;
			margin: 8%;
		}
	}

	@media (max-width: 600px)
	{
		.title-wrapper
		{
			margin: 10%;
		}
	}
</style>
<script>
	import PageWrapper from "../pageWrapper.svelte";
	import Header from "../header.svelte";
	import TextBlock from "../textBlock.svelte";
	import MyLink from "../myLink.svelte";
	import * as component from "./jobsText.js";
</script>