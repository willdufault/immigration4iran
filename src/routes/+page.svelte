<svelte:head>
	<link rel="icon" href="./favicon.png" type="image/png" />
	<title>Immigration4Iran</title>
</svelte:head>
<main>
	<Header/>
</main>
<style>
	*
	{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	/* declare theme colors here */
	:root
	{
		--primary-color: red;
	}
</style>
<script>
	import { base } from "$app/paths";
    import Header from "./header.svelte";
</script>