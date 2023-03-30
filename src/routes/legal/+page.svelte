<main>
    <PageWrapper>
        <Header/>
        <div style="margin: 0 20%; display: flex; justify-content:space-evenly"><h1>{component.title.getText()}</h1><h1>|</h1><h1>The Asylum Roadmap</h1></div>

        <div class="big-wrapper">
            <div class="tile-wrapper">
                <div class="tile-back" style="background:#3F7C85;">
                    back
                </div>
                <div class="tile-front" style="background:#747E7E">
                    front
                </div>
            </div>
            <div class="tile-wrapper">
                <div class="tile-back" style="background:#00CCBF">
                    back
                </div>
                <div class="tile-front" style="background:#72F2EB">
                    front
                </div>
            </div>
            <div class="tile-wrapper">
                <div class="tile-back" style="background:#3F7C85;">
                    back
                </div>
                <div class="tile-front" style="background:#747E7E">
                    front
                </div>
            </div>
            <div class="tile-wrapper">
                <div class="tile-back" style="background:#00CCBF">
                    back
                </div>
                <div class="tile-front" style="background:#72F2EB">
                    front
                </div>
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

    .big-wrapper
    {
        display: flex;
        justify-content: center;
    }

    .tile-wrapper
    {
        position: relative;
        height: 350px;
        width: 250px;
    }

    .tile-front
    {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background: hotpink;
        height: 100%;
        width: 100%;

    }

    .tile-back
    {
        position: absolute;
        background: lime;
        height: 100%;
        width: 100%;
        
    }
    
    .tile-front:hover
    {
        opacity: 0;
        transition: opacity 0.1s;
        
    }
</style>

<script>
    import TextBlock from "../textBlock.svelte";
    import {Dictionary} from "../dictionary.js";
    import * as component from "./legalText.js";
    import PageWrapper from "../pageWrapper.svelte";
    import Header from "../header.svelte";
</script>