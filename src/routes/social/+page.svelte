<main>
    <PageWrapper>
        <Header/>
        <p class="social-title"> {component.title.getText()}</p>
		<div class="block-wrapper">
			<TextBlock>
				<MyLink
					slot="title"
					link="https://handbookgermany.de/"
					text={component.handbook_title.getText()}/>
				<p slot="languages"> {component.available_langs.getText()} {component.handbook_lang.getText()} </p>
				<p slot="body"> {component.handbook_body.getText()} </p>
			</TextBlock>

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
				<p slot="title"> {component.edu_title.getText()} </p>
				<div slot="body">
					<p align="center">
						<!-- Fix link + make map-->
						<iframe
						class= "map" 
						title="Education Oppurtunities" 
						src="https://www.google.com/maps/d/embed?mid=1dIJKbgjwdzyQCkMGI_Ezai8v06o&hl=de&ehbc=2E312F"/>
					</p>
					<p>
						{component.edu_body1.getText()} 
						<MyLink
							link="https://hochschulforumdigitalisierung.de/de/blog/digital-education-and-information-resources-refugees"
							text={component.edu_link2.getText()}/>
						{component.edu_body2.getText()}
						<MyLink
							link="https://{component.edu_link3.getText()}"
							text={component.edu_link3.getText()}/>
					</p>
				</div>
			</TextBlock>

			<TextBlock>
				<p slot="title"> {component.programs_title.getText()} </p>
				<p slot="body">
					<MyLink
						link="https://www.google.com/maps/d/viewer?mid=zc6TdvfelKuY.kUvriXoSREXw"
						text={component.programs_link.getText()}/>
					{component.programs_body1.getText()} 
				</p>
			</TextBlock>

			<TextBlock>
				<p slot="title"> {component.integration_title.getText()} </p>
				<p slot="body">
					{component.integration_body1.getText()} 
					<MyLink
						link="https://www.bamf.de/EN/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/integrationskurse-node.html"
						text={component.integration_link.getText()}/>
					{component.integration_body2.getText()} 
				</p>
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
		height:20em;
	}

	.social-title
	{
		font-size: 3rem;
		text-align: center;
		padding: 3%;
	}

	.block-wrapper
	{
		margin: 1% 5%;
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