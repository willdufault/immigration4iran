<main>
    <Header/>
    <p> {component.title.getText()}</p>
    <TextBlock>
        <p slot="title"> {component.sample1title.getText()} </p>
        <p slot="body"> {component.sample1body.getText()} </p>
    </TextBlock>

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
    import {title} from "./ngoText.js";
    import * as component from "./ngoText.js";
</script>