<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
    <title>Rick Arendsen - Laboratorium</title>
    <meta
        name="description"
        content="Bekijk op deze pagina al mijn nieuwe experimentele projecten en tools."
    />
</svelte:head>

<div class="w-5/6 mt-5 m-auto" transition:slide|local>
    <slot />
</div>
