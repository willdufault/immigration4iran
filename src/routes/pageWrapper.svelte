<main style="--color1: {color1}; --color2: {color2}; --color3: {color3}; --color4: {color4};">
    <slot></slot>
</main>
<style>
	*
	{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	main
	{
		/* causes issues with margin on bottom element, temporarily in app.html */
		/* background: #99c0ff; */
		min-height: 100vh;
	}
</style>
<script>
	import { color1, color2, color3, color4 } from "../theme";
</script>