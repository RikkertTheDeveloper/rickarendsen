<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
    <title>Retrospective Worldskills Netherlands</title>
    <meta
        name="description"
        content="Ik heb recent deelgenomen aan de finales van WorldSkills Netherlands, in deze blog post deel ik mijn ervaringen over de wedstrijd."
    />
</svelte:head>

<div class="w-full mt-5 m-auto" transition:slide|local>
    <slot />
</div>
