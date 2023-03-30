<main>
    <PageWrapper>
        <Header/>
        <p> {component.title.getText()}</p>

        <div class="flip">
            <div class="card-front">
                <h1>Hello</h1>/
            </div>
            <div class="card-back">
                <h1>Yeppers</h1>
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
    .flip 
    {
        background-color: transparent;
        width: 300px;
        height: 200px;
        border: 1px solid #f1f1f1;
    }
    .card-front, .card-back
    {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }


</style>

<script>
    import { base } from "$app/paths";
    import Header from "../header.svelte";
    import TextBlock from "../textBlock.svelte";
    import {Dictionary} from "../dictionary.js";
    import * as component from "./legalText.js";
    import PageWrapper from "../pageWrapper.svelte";
</script>