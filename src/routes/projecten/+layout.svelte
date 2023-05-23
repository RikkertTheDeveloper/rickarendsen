<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
    <title>Rick Arendsen - Mijn Projecten</title>
    <meta
        name="description"
        content="Bekijk op deze pagina een actuele overzicht van al mijn afgaande en huidige projecten."
    />
</svelte:head>

<div class="w-5/6 mt-5 m-auto" transition:slide|local>
    <slot />
</div>
