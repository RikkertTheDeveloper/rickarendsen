<script>
    import { slide } from "svelte/transition";
</script>

<svelte:head>
    <title>Wat is Flask Testing Suite?</title>
    <meta
        name="description"
        content="Lees hier mijn verhaal over een van mijn nieuwste projecten. Een zero-boilerplate testing suite."
    />
</svelte:head>

<div class="w-full mt-5 m-auto" transition:slide|local>
    <slot />
</div>
