<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
	<title>Wat is Sitemap Generator?</title>
    <meta name="description" content="Lees hier over mijn nieuwe tool: 'Sitemap Generator', hiermee kunt u makkelijk sitemaps opstellen.">
</svelte:head>

<div class="w-full mt-5 m-auto" transition:slide|local>
    <slot />
</div>
