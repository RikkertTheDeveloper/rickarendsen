<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
    <title>Mijn Deelname Aan Worldskills Netherlands</title>
    <meta
        name="description"
        content="Lees hier mijn verhaal over mijn deelname aan de finales van WorldSkills Netherlands."
    />
</svelte:head>

<div class="w-full mt-5 m-auto" transition:slide|local>
    <slot />
</div>
