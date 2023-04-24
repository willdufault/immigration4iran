<main>
	<PageWrapper>
		<Header/>
		<div class="title-wrapper">
			<p>About Us</p>
		</div>
		<div class="body-wrapper">
			<p>
				This website was created by the group, Immigration4Iran, which is made up of four undergraduate 
				students from Worcester Polytechnic Institute (WPI). As part of their Interactive Qualifying 
				Project (IQP) at WPI, Immigration4Iran spent eight weeks researching the Germany asylum-seeking
				process through interviews and analysis of previous research, and building this website 
				in collaboration with Felix Hoffman.
			</p>
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

	.title-wrapper
	{
		font-size: 3rem;
		font-weight: 700;
		display: flex;
		justify-content: center;
		margin: 4%;
	}

	.body-wrapper
	{
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		margin: 0 20%;
		font-size: 1.5rem;
	}
</style>
<script>
	import PageWrapper from "../pageWrapper.svelte";
	import Header from "../header.svelte";
</script>