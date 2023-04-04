<main>
    <PageWrapper>
        <Header/>
        <p> {component.title.getText()}</p>

        <TextBlock>
            <a slot="title" href="https://handbookgermany.de/" target="_blank" rel="noreferrer"> {component.handbook_title.getText()} </a>
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
                    <a href="https://www.refugees-welcome.net/" target="_blank" rel="noreferrer">
                        {component.housing_link.getText()}
                    </a>
                    <!-- Can make this a ul later -->
                    {component.housing_list.getText()}
                </p>
            </div>
        </TextBlock>

        <TextBlock>
            <p slot="title"> {component.health_title.getText()} </p>
            <p slot="body">
                {component.health_body1.getText()} 
                <a href="https://medibueros.org/" target="_blank" rel="noreferrer">
                    {component.health_link.getText()}
                </a>
                {component.health_body2.getText()}
            </p>
        </TextBlock>

        <TextBlock>
            <p slot="title"> {component.jobs_title.getText()} </p>
            <div slot="body">
                <p> {component.jobs_body1.getText()} </p>
                <p>{component.jobs_body2.getText()} </p>
            </div>
        </TextBlock>

        <TextBlock>
            <p slot="title"> {component.map_title.getText()} </p>
            <p slot="body">
                {component.map_body1.getText()} 
                <a href="https://bamf-navi.bamf.de/en/" target="_blank" rel="noreferrer">
                    {component.map_link.getText()}
                </a>
            </p>
        </TextBlock>

        <TextBlock>
            <p slot="title"> {component.asylum_title.getText()} </p>
            <p slot="body">
                {component.asylum_body1.getText()} 
                <a href="https://www.ecre.org/wp-content/uploads/2016/05/ELENA-Index-latest-update-May-2016.pdf" target="_blank" rel="noreferrer">
                    {component.asylum_link.getText()}
                </a>
            </p>
        </TextBlock>

        <TextBlock>
            <p slot="title"> {component.edu_title.getText()} </p>
            <p slot="body">
                <a href="https://www.ecre.org/wp-content/uploads/2016/05/ELENA-Index-latest-update-May-2016.pdf" target="_blank" rel="noreferrer">
                    {component.edu_link1.getText()}
                </a>
                {component.edu_body1.getText()} 
                <a href="https://www.ecre.org/wp-content/uploads/2016/05/ELENA-Index-latest-update-May-2016.pdf" target="_blank" rel="noreferrer">
                    {component.edu_link2.getText()}
                </a>
            </p>
        </TextBlock>

    </PageWrapper>
</main>

<style>
    *
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>

<script>
    import { base } from "$app/paths";
    import Header from "../header.svelte";
    import TextBlock from "../textBlock.svelte";
    import {Dictionary} from "../dictionary.js";
    import * as component from "./socialText.js";
    import PageWrapper from "../pageWrapper.svelte"
</script>