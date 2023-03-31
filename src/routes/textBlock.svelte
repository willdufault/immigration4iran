<script>
    import {Dictionary} from "./dictionary.js";
    let dict = new Dictionary();
    let title;
    let other;
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
			<slot name="icon"></slot>
            <slot name="title"> Title </slot>
        </div>
        <slot name="languages"> </slot>
        <slot name="body"> Text Body </slot>
        <slot name="contact"> </slot>
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
        /* border: 2px solid blue; */
		margin: 5%;
		background: var(--color3);
		border-radius: 0.2em;
        display: flex;
        padding: 2%;
        justify-content: space-between;
        width: fit-content;
        flex-direction: column;
		box-shadow: 0 0 0.5em #444;
		transition: 0.3s ease-in-out;
    }

	.tile-wrapper:hover
	{
		box-shadow: 0 0 1.5em #666;
		transform: scale(1.02)
	}

    .sub-wrapper
    {
        display: flex;
        align-items: center;
	}

	slot :global(*)
	{
		font-size: 100px;
	}
</style>