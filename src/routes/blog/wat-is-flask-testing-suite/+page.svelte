<script>
    import { Avatar } from "@skeletonlabs/skeleton";

    import KeyboardReturn from "svelte-material-icons/KeyboardReturn.svelte";
    import GitHub from "svelte-material-icons/Github.svelte";
</script>

<h1 class="font-bold">Wat is Flask Testing Suite?</h1>
<footer class="py-4 flex justify-start items-center space-x-4">
    <Avatar
        src="https://media.licdn.com/dms/image/D4E03AQHoRXxiQ3vGbA/profile-displayphoto-shrink_200_200/0/1674656535932?e=1684972800&v=beta&t=fD1FybpxUjn-TsvtsQiok94DEX1YvI8OUkkJeyWckqs"
        width="w-8"
    />

    <section class="flex-auto flex justify-between items-center">
        <h6 class="font-bold">Door Rick Arendsen</h6>
        <small>op 21-03-2023 om 14:27 uur</small>
    </section>
</footer>

<hr />
<br />

<h2>Aanleiding Project</h2>
<br />
<p>
    <b>Test-Driven Development,</b> het is een van mijn favoriete gebieden in software
    development. Omdat goede code schrijven een ding is. Maar stabiele en schaalbare
    code schrijven iets heel anders is. Ook al werk je als ontwikkelaar alleen is
    het altijd een goed idee om een testing suite toe te passen op een project. Hierdoor
    kunt u de logica van uw code testen en zorgen dat de code altijd het juiste gedrag
    heeft.
</p>
<br />

<p>
    Maar hoe werkt een testing suite nou precies vanbinnen? Dat bleef ik me
    afvragen, dit was voor mij de aanleiding om zelf een testing suite te gaan
    schrijven. Ik noemde deze suite <a
        href="https://www.github.com/rikkertthedeveloper/flask">Flask</a
    >, achter de naam van een scheikundeappratuur. Want eigenlijk is code testen
    toch wel erg veel experimenteren.
</p>
<br />

<h2>Wat maakt Flask Suite Uniek?</h2>
<br />

<p>
    Maar natuurlijk moest ik wel wat nieuws brengen naar het JavaScript
    ecosysteem. Een testing suite maken is leuk, maar op het moment bestaan er
    al honderden soorten suite. Van <a href="https://jestjs.io/">Jest</a> tot
    <a href="https://playwright.dev/">Playwright</a>. Elke suite heeft weer zijn
    eigen functionaliteiten dat deze uniek maakt. Jest heeft bijvoorbeeld de
    tools om zeer complexe testen uit te schrijven, en Playwright blijft het
    beste voor end-to-end testen.
</p>
<br />

<p>
    Het enige nadeel aan deze suites zijn dat ik niet altijd deze gigantische
    tools op wil zetten die mijn bestandsstructuur nog complexer en groot maken,
    en soms wil ik het graag gewoon simpel en schoon houden.
    <b>Hier wou ik graag wat op bedenken,</b> ik heb er hier vervolgens voor gezorgd
    dat Flask opgezet kan worden met een simpel commando, en minimale configuratie.
    Zodat de ontwikkelaar direct aan de slag kan met het schrijven van testen.
</p>

<br />
<br />

<footer>
    <a href="/blog" class="btn variant-filled">
        <KeyboardReturn />
        <span><b>Keer Terug</b></span>
    </a>

    <a
        href="https://github.com/rikkertthedeveloper/flask"
        class="btn variant-filled"
    >
        <GitHub />
        <span><b>Flask Github Repository</b></span>
    </a>
</footer>
