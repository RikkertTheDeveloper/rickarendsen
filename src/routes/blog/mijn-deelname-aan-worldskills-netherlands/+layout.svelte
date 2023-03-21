<script>
    import { slide } from 'svelte/transition'
</script>

<div class="w-full mt-5 m-auto" transition:slide|local>
    <slot/>
</div>


