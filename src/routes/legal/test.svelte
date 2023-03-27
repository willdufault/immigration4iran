<main>
	<div class="tile-wrapper">
		<div class="sub-wrapper">
			{#if src_}
				<img src={src_} alt="test image"/>
			{/if}
			<h1>{title_}</h1>
		</div>
		<p>{text_}</p>
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
<script>
	export let title_;
	export let src_;
	export let text_;
</script>