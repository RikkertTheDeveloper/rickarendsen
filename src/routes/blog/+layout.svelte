<script>
    import { slide } from 'svelte/transition'
</script>

<div class="w-5/6 mt-5 m-auto" transition:slide|local>
    <slot/>
</div>


