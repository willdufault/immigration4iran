<svelte:head>
	<link rel="icon" href="./favicon.png" type="image/png" />
	<title>Immigration4Iran | {component.title.getText()}</title>
</svelte:head>
<main>
	<PageWrapper>
		<Header/>
		<div class="title-wrapper">
			<p>{component.title.getText()}</p>
		</div>
		<div class="blocks-wrapper">
			<TextBlock>
				<p slot="title"> {component.housing_title.getText()} </p>
				<div slot="body">
					<p> 
						{component.housing_body1.getText()}
					</p>
					<p>
						<MyLink
							link="https://www.refugees-welcome.net/"
							text={component.housing_link.getText()}/>
						{component.housing_body2.getText()}
					</p>
					<ul style="margin:1em">
						<li>
							<MyLink
								link="https://{component.housing_list[0]}"
								text={component.housing_list[0]}/>
						</li>
						<li>
							<MyLink
								link="https://{component.housing_list[1]}"
								text={component.housing_list[1]}/>
						</li>
						<li>
							<MyLink
								link="https://{component.housing_list[2]}"
								text={component.housing_list[2]}/>
						</li>
						<li>
							<MyLink
								link="https://{component.housing_list[3]}"
								text={component.housing_list[3]}/>
						</li>
						<li>
							<MyLink
								link="https://{component.housing_list[4]}"
								text={component.housing_list[4]}/>
						</li>
						<li>
							<MyLink
								link="https://{component.housing_list[5]}"
								text={component.housing_list[5]}/>
						</li>
					</ul>
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
	import * as component from "./housingText";
</script>