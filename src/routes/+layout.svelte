<script>
    import "../app.css";
    import "@skeletonlabs/skeleton/styles/all.css";
    import "@skeletonlabs/skeleton/themes/theme-rocket.css";

    import { page } from "$app/stores";
    import { AppBar, LightSwitch } from "@skeletonlabs/skeleton";

    import Home from "svelte-material-icons/Home.svelte";
    import Github from "svelte-material-icons/Github.svelte";
    import Pencil from "svelte-material-icons/Pencil.svelte";
    import Clipboard from "svelte-material-icons/Clipboard.svelte";
    import Flask from "svelte-material-icons/Flask.svelte";
</script>

<svelte:head>
    <title>Rick Arendsen - Full Stack Developer</title>
    <meta
        name="description"
        content="Hallo, mijn naam is Rick Arendsen. Ik ben een 18 jaar oude student met een grote passie voor Software Development."
    />
    <meta
        name="google-site-verification"
        content="FZ_YSa8GDVaEDqWA21Eg6bEbd_NWRyf4wsjBH78jcjk"
    />
</svelte:head>

<AppBar
    gridColumns="grid-cols-3"
    slotDefault="place-self-center"
    slotTrail="place-content-end"
>
    <svelte:fragment slot="lead">
        <div class="flex space-x-3">
            <a href="/">
                <span
                    class="chip variant-{$page.url.pathname == '/'
                        ? 'filled'
                        : 'soft'} hover:variant-{$page.url.pathname == '/'
                        ? 'soft'
                        : 'filled'}"
                >
                    <span><Home size="15" /></span>
                    <span>Home</span>
                </span>
            </a>

            <a href="/blog">
                <span
                    class="chip variant-{$page.url.pathname.includes('blog')
                        ? 'filled'
                        : 'soft'} hover:variant-{$page.url.pathname == '/'
                        ? 'soft'
                        : 'filled'}"
                >
                    <span><Pencil size="15" /></span>
                    <span>Blog</span>
                </span>
            </a>

            <a href="/projecten">
                <span
                    class="chip variant-{$page.url.pathname.includes(
                        'projecten'
                    )
                        ? 'filled'
                        : 'soft'} hover:variant-{$page.url.pathname == '/'
                        ? 'soft'
                        : 'filled'}"
                >
                    <span><Clipboard size="15" /></span>
                    <span>Projecten</span>
                </span>
            </a>

            <a href="/lab">
                <span
                    class="chip variant-{$page.url.pathname.includes('lab')
                        ? 'filled'
                        : 'soft'} hover:variant-{$page.url.pathname == '/'
                        ? 'soft'
                        : 'filled'}"
                >
                    <span><Flask size="15" /></span>
                    <span>Lab</span>
                </span>
            </a>
        </div>
    </svelte:fragment>

    <svelte:fragment slot="trail">
        <LightSwitch />
        <a href="https://www.github.com/rikkertthedeveloper/rickarendsen">
            <Github size="25" />
        </a>
    </svelte:fragment>
</AppBar>

<slot />
