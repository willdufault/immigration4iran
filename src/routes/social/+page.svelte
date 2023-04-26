<main>
    <PageWrapper>
        <Header/>
        <p class="social-title"> {component.title.getText()}</p>
		<div class="block-wrapper">

			<!-- 
				Template Text Block:
				Please see "Page Content"
			-->
			<!-- 
			<TextBlock>
				<p slot="title"> {component.[component name].getText()} </p>
				<p slot="body"> {component.[component name].getText()} </p>
			</TextBlock>
			-->

			<TextBlock>
				<MyLink
					slot="title"
					link="https://handbookgermany.de/"
					text={component.handbook_title.getText()}/>
				<p slot="languages"> {component.available_langs.getText()} {component.handbook_lang.getText()} </p>
				<p slot="body"> {component.handbook_body.getText()} </p>
			</TextBlock>

			<TextBlock>
				<MyLink
					slot="title"
					link={`${base}/housing`}
					text="Housing (NEEDS TRANSLATION)"/>
				<p slot="body">
					Information about finding housing in Germany. 
				</p>
			</TextBlock>

			<TextBlock>
				<MyLink
					slot="title"
					link={`${base}/jobs`}
					text="Jobs (NEEDS TRANSLATION)"/>
				<p slot="body">
					Information about finding a job in Germany. 
				</p>
			</TextBlock>
			
			<TextBlock>
				<MyLink
					slot="title"
					link={`${base}/education`}
					text="Education (NEEDS TRANSLATION)"/>
				<p slot="body">
					Information about education in Germany. This page includes links to university opportunities,
					integration courses, and more. 
				</p>
			</TextBlock>

			
			<TextBlock>
				<p slot="title"> {component.health_title.getText()} </p>
				<p slot="body">
					{component.health_body1.getText()} 
					<MyLink
						link="https://medibueros.org/"
						text={component.health_link.getText()}/>
					{component.health_body2.getText()}
				</p>
			</TextBlock>

			<TextBlock>
				<p slot="title"> {component.map_title.getText()} </p>
				<p slot="body">
					{component.map_body1.getText()} 
					<MyLink
						link="https://bamf-navi.bamf.de/en/"
						text={component.map_link.getText()}/>
				</p>
			</TextBlock>

			<TextBlock>
				<p slot="title"> {component.asylum_title.getText()} </p>
				<p slot="body">
					{component.asylum_body1.getText()} 
					<MyLink
						link="https://{component.asylum_link1.getText()}"
						text={component.asylum_link1.getText()}/>
					{component.asylum_body2.getText()} 
					<MyLink
						link="https://www.ecre.org/wp-content/uploads/2016/05/ELENA-Index-latest-update-May-2016.pdf"
						text={component.asylum_link2.getText()}/>
				</p>
			</TextBlock>

			<TextBlock>
				<p slot="title"> {component.programs_title.getText()} </p>
				<div slot="body">
					<p align="center">
						<!-- Fix link + make map-->
						<iframe
						class= "map" 
						title="Local Programs for Refugees" 
						src="https://www.google.com/maps/d/embed?mid=1SHp13afz2lzUyrPqFYouMbPgtF4&ehbc=2E312F"/>
					</p>
					<MyLink
						link="https://www.google.com/maps/d/viewer?mid=zc6TdvfelKuY.kUvriXoSREXw"
						text={component.programs_link.getText()}/>
					{component.programs_body1.getText()} 
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

	.map
	{
		width:100%;
		height:20rem;
	}

	.social-title
	{
		font-size: 3rem;
		font-weight: 700;
		text-align: center;
		margin: 3%;
	}

	.block-wrapper
	{
		margin: 1% 5%;
	}

	/* media queries */
	@media (min-width: 1800px)
	{
		.social-title
		{
			font-size: 4rem;
			margin: 5%
		}
	}

	@media (max-width: 900px)
	{
		.social-title
		{
			font-size: 2.5rem;
			margin: 8%;
		}
	}

	@media (max-width: 600px)
	{
		.social-title
		{
			margin: 10%;
		}
	}
</style>

<script>
    import { base } from "$app/paths";
    import Header from "../header.svelte";
    import TextBlock from "../textBlock.svelte";
    import {Dictionary} from "../dictionary.js";
    import * as component from "./socialText.js";
    import PageWrapper from "../pageWrapper.svelte";
	import MyLink from "../myLink.svelte";
	import MailLink from "../mailLink.svelte";
</script>