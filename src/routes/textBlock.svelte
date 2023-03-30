<script>
    import {Dictionary} from "./dictionary.js";
    let dict = new Dictionary();
    let title;
    let other;
    export let src_;
</script>

<!--<main>-->
<!--    <div class={"text-block-wrapper"}>-->
<!--        <slot name="title">{title}</slot>-->
<!--        <p> <slot name="other"> {other}</slot></p>-->
<!--    </div>-->
<!--</main>-->

<main>
    <div class="tile-wrapper">
        <div class="sub-wrapper">
            {#if src_}
                <img src={src_} alt="test image"/>
            {/if}
            <slot name = "title"> Title </slot>
<!--            <h1>{title_}</h1>-->
        </div>
        <slot name="languages"> </slot>
        <slot name="body"> Text Body </slot>
        <slot name="contact"> Contact </slot>
<!--        <p>{text_}</p>-->
    </div>
</main>

<style>
    *
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .tile-wrapper
    {
        border: 2px solid blue;
        display: flex;
        padding: 2%;
        justify-content: space-between;
        width: fit-content;
        flex-direction: column;

    }

    .sub-wrapper
    {
        border: 2px dotted red;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .sub-wrapper img
    {
        width: 20%;
    }
</style>