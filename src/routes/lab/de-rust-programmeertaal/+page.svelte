<script>
    import { Avatar } from "@skeletonlabs/skeleton";
    import KeyboardReturn from "svelte-material-icons/KeyboardReturn.svelte";
</script>

<h1 class="font-bold">De Rust Programmeertaal</h1>
<footer class="py-4 flex justify-start items-center space-x-4">
    <Avatar
        src="https://media.licdn.com/dms/image/D4E03AQHoRXxiQ3vGbA/profile-displayphoto-shrink_200_200/0/1674656535932?e=1684972800&v=beta&t=fD1FybpxUjn-TsvtsQiok94DEX1YvI8OUkkJeyWckqs"
        width="w-8"
    />

    <section class="flex-auto flex justify-between items-center">
        <h6 class="font-bold">Door Rick Arendsen</h6>
        <small>Op 23-05-2023 om 11:00 uur</small>
    </section>
</footer>

<hr />
<br />

<h2>Wat is Rust?</h2>
<p>
    Rust is een moderne programmeertaal die is ontworpen om robuuste en
    betrouwbare systemen te ontwikkelen met een focus op geheugenveiligheid en
    concurrency. Het biedt een aantal unieke eigenschappen die het onderscheiden
    van andere programmeertalen.
</p>

<br />
<h3>Geheugenveiligheid</h3>
<p>
    Een van de belangrijkste kenmerken van Rust is de sterke nadruk op
    geheugenveiligheid. In tegenstelling tot veel andere programmeertalen voert
    Rust statische analyses uit tijdens het compileren om geheugenfouten zoals
    null pointer dereferences, bufferoverflows en data races te voorkomen. Dit
    betekent dat veelvoorkomende bugs die vaak leiden tot crashes en
    beveiligingsproblemen in andere talen, veel minder waarschijnlijk zijn in
    Rust. Het geheugenbeheer in Rust wordt afgehandeld door een systeem van
    eigenaarschap en lenerschap, dat ervoor zorgt dat de geheugenallocaties
    correct worden beheerd zonder dat er handmatige geheugenbevrijding nodig is.
</p>
<br />
<h3>Snelheid en Concurrency</h3>
<p>
    Naast geheugenveiligheid biedt Rust ook uitstekende prestaties en
    ondersteuning voor concurrency. Rust code wordt gecompileerd naar
    machinecode, waardoor het een hoge uitvoeringssnelheid kan bereiken. De taal
    maakt gebruik van geavanceerde compiler-optimalisaties om efficiënte code te
    genereren zonder de programmeur lastig te vallen met complexe
    optimalisatietechnieken. Bovendien heeft Rust ingebouwde ondersteuning voor
    het veilig delen van gegevens tussen threads, waardoor het eenvoudiger is om
    gelijktijdige en parallelle programma's te schrijven zonder zorgen over data
    races en synchronisatiefouten.
</p>
<br />
<h3>Toepassingsgebieden</h3>
<p>
    Vanwege zijn unieke combinatie van geheugenveiligheid, snelheid en
    concurrency is Rust geschikt voor een breed scala aan toepassingsgebieden.
    Het wordt vaak gebruikt voor systeemprogrammering, waar geheugenveiligheid
    en prestaties van cruciaal belang zijn, zoals besturingssystemen, embedded
    systems en netwerkstacks. Ook wordt Rust steeds populairder in het
    webdevelopment, waar het wordt gebruikt voor het schrijven van veilige en
    snelle servers, browserextensies en web assembly.
</p>
<br />

<footer>
    <a href="/blog" class="btn variant-filled">
        <KeyboardReturn />
        <span><b>Keer Terug</b></span>
    </a>
</footer>
