<script>
    import {Dictionary} from "./dictionary.js";
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
			<div class="icon-wrapper">
				<slot name="icon"></slot>
			</div>
			<div class="title-wrapper">
				<slot name="title"> Title </slot>
			</div>
        </div>
		<div class="languages-wrapper">
			<slot name="languages"> </slot>
		</div>
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
		margin-bottom: 3%;
		background: var(--color3);
		border-radius: 0.2rem;
        display: flex;
        padding: 2%;
        justify-content: space-between;
        width: 100%;
        flex-direction: column;
		border: 0.1rem solid #cccccc;
		/* un-comment for 3d shadow effect */
		/* box-shadow: 0 0 0.5em #444;
		transition: 0.3s ease-in-out; */
    }

	.tile-wrapper:hover
	{
		border: 0.1rem solid #666666;
		/* un-comment for 3d shadow effect */
		/* box-shadow: 0 0 1.5em #666;
		transform: scale(1.02) */
	}

	.tile-wrapper:hover .title-wrapper :global(*)
	{
		text-decoration: 0.2rem underline;
	}

    .sub-wrapper
    {
        display: flex;
        align-items: center;
	}

	.icon-wrapper :global(*)
	{
		font-size: 5rem;
		margin-right: 1rem;
	}

	.title-wrapper :global(*)
	{
		font-size: 3rem;
		color: black;
		text-decoration: none;
	}

	.title-wrapper :global(*)
	{
		font-size: 3rem;
	}

	.languages-wrapper :global(*)
	{
		font-size: 1.5rem;
	}
</style>