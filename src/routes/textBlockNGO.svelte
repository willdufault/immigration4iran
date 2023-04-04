<main>
	<div class="block-wrapper">
		<div class="header-wrapper">
			{#if icon}
				<Icon icon={icon}/>&nbsp;
			{/if}
			{#if header_text}
				{#if header_link}
					<a class="header-text" href={header_link} rel="noreferrer" target="_blank">{header_text}</a>
				{:else}
					<p class="header-text">{header_text}</p>
				{/if}
			{/if}
		</div>
		{#if languages}
			<div class="languages-wrapper">
				<p>Available in: {languages}</p>
				<!-- if languages stored in list -->
				<!-- <p>Available in:&nbsp;</p>
				{#each languages as lang}
					<p>{lang}</p>
					{#if lang !== languages[languages.length - 1]}
						<p>,&nbsp;</p>
					{/if}
				{/each} -->
			</div>
		{/if}
		{#if body}
			<p class="body-text">{body}</p>
		{/if}
		{#if email}
			<a class="contact-text" href="mailto:{email}" rel="noreferrer">Contact: {email}</a>
		{/if}
	</div>
</main>
<style>
	*
	{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.block-wrapper
	{
		background: white;
		padding: 2%;
		border-radius: .2rem;
		box-shadow: 0 0 0.5em #444;
		transition: 0.3s ease-in-out;
		/* temporary */
		margin: 5%;
	}

	.block-wrapper:hover
	{
		box-shadow: 0 0 1.5em #666;
		transform: scale(1.02)
	}

	.header-wrapper
	{
		display: flex;
		align-items: center;
		font-size: 4rem;
	}

	.header-text
	{
		font-size: 3rem;
	}

	.languages-wrapper
	{
		display: flex;
		font-size: 1.5rem;
	}

	.body-text
	{
		font-size: 1rem;
	}

	.contact-text
	{
		font-size: 1.2rem;
	}
</style>
<script>
	import Icon from "@iconify/svelte";

	export let icon;
	export let header_text;
	export let header_link;
	export let languages;
	export let body;
	export let email;
</script>