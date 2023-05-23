<script>
    import { Avatar } from "@skeletonlabs/skeleton";

    import Navigation from "svelte-material-icons/Navigation.svelte";
    import KeyboardReturn from "svelte-material-icons/KeyboardReturn.svelte";
</script>

<h1 class="font-bold">Retrospective Worldskills</h1>
<footer class="py-4 flex justify-start items-center space-x-4">
    <Avatar
        src="https://media.licdn.com/dms/image/D4E03AQHoRXxiQ3vGbA/profile-displayphoto-shrink_200_200/0/1674656535932?e=1684972800&v=beta&t=fD1FybpxUjn-TsvtsQiok94DEX1YvI8OUkkJeyWckqs"
        width="w-8"
    />

    <section class="flex-auto flex justify-between items-center">
        <h6 class="font-bold">Door Rick Arendsen</h6>
        <small>op 15-05-2023 om 16:21 uur</small>
    </section>
</footer>

<hr />
<br />

<h2>Introductie Worldskills Netherlands</h2>
<br />
<p>
    Voor het geval dat u mijn vorige blog post niet gelezen heeft, zal ik
    opnieuwe een korte samenvatting geven van het idee van de Skills The Finals
    wedstrijd:
    <br />
    <i class="text-primary-600 underline">
        "Deze wedstrijd biedt deelnemers de kans om hun vaardigheden te laten
        zien op verschillende gebieden, zoals software development, ICT-beheer,
        Mediavormgeving en nog veel meer. Het is een uitdaging waarbij
        deelnemers hun grenzen kunnen verleggen en kunnen laten zien wat ze in
        huis hebben."
    </i>
    <br />
    <br />

    <a
        href="/blog/mijn-deelname-aan-worldskills-netherlands"
        class="btn variant-filled"
    >
        <Navigation />
        <span><b>Navigeer naar Post</b></span>
    </a>
</p>
<br />

<h2>De voorbereiding</h2>
<p>
    Om mij voor te bereiden op WorldSkills Netherlands heb ik verschillende
    tools, bibliotheken, oefenopdrachten en overige projecten. Dit deed ik in
    verschillende programmeertalen, denk hier bijvoorbeeld aan PHP, JavaScript
    en Python. Hierdoor had ik een brede keus uit programmeertalen om te
    gebruiken tijdens de wedstrijd. Hiernaast heb ik ook verschillende skills
    geleerd zoals project management, wireframing en rapid prototyping om snel
    een werkende applicatie te maken.
</p>

<br />

<h2>De Wedstrijd</h2>
<br />
<h3>De Familiarisation</h3>
<p>
    Na alle voorbereidingen was het eindelijk zover: de "Skills The Finals"
    wedstrijd. De dag voor de wedstrijd hadden we een "familiarisatie" periode.
    Tijdens deze periode konden we in overleg met de jury bespreken welke
    software, programmeertalen en tools we tijdens de wedstrijd mochten
    gebruiken. Het was belangrijk dat deze goedkeuring van de jury werd
    verkregen om tijd te besparen. Daarnaast kregen de deelnemers de gelegenheid
    om zich comfortabel te voelen op hun werkplek en deze naar eigen wens in te
    richten voor de wedstrijd. Zo konden ze bijvoorbeeld bepaalde software
    alvast installeren, zodat ze dit niet op de wedstrijddag zelf hoefden te
    doen.
</p>
<br />
<h3>De Wedstrijdopdracht</h3>
<p>
    Op de eerste dag van de wedstrijd werd de opdracht bekendgemaakt: het
    ontwikkelen van een voorraadsysteem voor een ambitieuze LEGO-verzamelaar
    genaamd Frits. Onze taak was om een systeem te creëren waarmee Frits zijn
    collectie kon beheren en waarin hij kon aangeven welke items hij al had
    verzameld. Daarnaast moesten we zijn bestaande collectielijst, die honderden
    figuren, sets en collecties bevatte, op een gestructureerde manier
    formatteren.
</p>
<br />

<h2>Retrospective Wedstrijd</h2>
<br />

<h3>Wat ging goed?</h3>
<p>
    Ik heb tijdens de wedstrijd snel een goede stack uit kunnen kiezen, ik heb
    Laravel en Vue gekozen. Door deze combinatie kon ik snel door middel van de
    ORM dynamische data functioneel maken. En was het opzetten van een
    functionele API snel gedaan. Dit was crucieel voor dit verzamelingsysteem.
    Ik namelijk makkelijk de bestaande modellen formatteren naar een
    genormaliseerd formaat om te verwerken in de Database. Hierdoor hield ik
    genoeg tijd over om de front-end van het systeem te maken.
</p>
<br />
<p>
    Hiernaast heb ik tijdens de wedstrijd ook gebruik gemaakt van Test-Driven
    Development en Behaviour-Driven Development. Hierdoor heb ik de
    functionaliteiten van mijn applicatie goed uit kunnen plannen en kon ik mijn
    code testen om te zorgen dat alle functionaliteiten goed samen werkte.
</p>
<br />

<h3>Wat ging minder goed?</h3>
<p>
    Tijdens de wedstrijd heb ik mij te veel gefixeerd op de back-end van de
    applicatie zo foutloos in elkaar te zetten. Hierdoor hield ik op de tweede
    dag van de wedstrijd minder tijd over om te werken aan het opfleuren van het
    ontwerp, en zag het ontwerp van het systeem er heel zakelijk uit. Dit was
    helaas niet waar de jury voor zocht, en heb ik hier ook punten op verloren.
</p>
<br />
<footer>
    <a href="/blog" class="btn variant-filled">
        <KeyboardReturn />
        <span><b>Keer Terug</b></span>
    </a>
</footer>
