<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
	<title>Rick Arendsen - Blog</title>
    <meta name="description" content="Bekijk op deze pagina alle blog posts die op de website gepost zijn.">
</svelte:head>

<div class="w-5/6 mt-5 m-auto" transition:slide|local>
    <slot />
</div>
