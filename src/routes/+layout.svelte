<script>
    import '@skeletonlabs/skeleton/themes/theme-crimson.css';
    import '@skeletonlabs/skeleton/styles/all.css';
    import "../app.css";

    import {AppBar, LightSwitch} from "@skeletonlabs/skeleton"
    import Home from "svelte-material-icons/Home.svelte";
    import Github from "svelte-material-icons/Github.svelte";
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead"><Home size=25/></svelte:fragment>

	<svelte:fragment slot="trail">
        <LightSwitch />
        <Github size=25 />
    </svelte:fragment>
</AppBar>

<slot />
