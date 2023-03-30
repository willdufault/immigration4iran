<main>
    <PageWrapper>
        <Header/>
        <p> {component.title.getText()}</p>
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