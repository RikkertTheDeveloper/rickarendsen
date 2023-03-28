<script>
    import { Avatar } from "@skeletonlabs/skeleton";

    import KeyboardReturn from "svelte-material-icons/KeyboardReturn.svelte";
    import GitHub from "svelte-material-icons/Github.svelte";
</script>

<h1 class="font-bold">Wat is Sitemap Generator?</h1>
<footer class="py-4 flex justify-start items-center space-x-4">
    <Avatar
        src="https://media.licdn.com/dms/image/D4E03AQHoRXxiQ3vGbA/profile-displayphoto-shrink_200_200/0/1674656535932?e=1684972800&v=beta&t=fD1FybpxUjn-TsvtsQiok94DEX1YvI8OUkkJeyWckqs"
        width="w-8"
    />

    <section class="flex-auto flex justify-between items-center">
        <h6 class="font-bold">Door Rick Arendsen</h6>
        <small>op 28-03-2023 om 15:30 uur</small>
    </section>
</footer>

<hr />
<br />

<h2>Aanleiding Project</h2>
<br>
<p>
Een sitemap is een cruciaal onderdeel van elke website, omdat het belangrijke informatie bevat over de structuur en inhoud van de website. Een sitemap is als het ware een kaart van de website die aangeeft welke pagina's er zijn, hoe deze pagina's met elkaar verbonden zijn en hoe belangrijk deze pagina's zijn ten opzichte van elkaar.
Een sitemap kan verschillende soorten informatie bevatten, zoals blogposts, nieuwsitems, productpagina's en andere relevante inhoud. Door deze informatie in de sitemap op te nemen, wordt het voor zoekmachines gemakkelijker om de website te crawlen en te indexeren.
</p>
<br>
<p>
Dit bespaart niet alleen tijd, maar vermindert ook de kans op menselijke fouten bij het indexeren van de website. Met een goed opgestelde sitemap kunnen zoekmachines de website sneller en beter begrijpen, waardoor de kans op een hogere ranking in de zoekresultaten toeneemt.
Het is daarom van groot belang dat elke website over een sitemap beschikt en dat deze regelmatig wordt bijgewerkt. Dit zorgt niet alleen voor een betere gebruikerservaring, maar ook voor een hogere zichtbaarheid en vindbaarheid van de website in de zoekresultaten.
</p>
<br>

<h2>Wat doet Sitemap Generator?</h2>
<p>
    Ik heb een tool geschreven genaamd de "Sitemap Generator" waarmee ik dynamisch een sitemap kan genereren. Wanneer ik bijvoorbeeld 1500 producten in een database heb, wil ik deze graag allemaal als afzonderlijke URLs indexeren. Dit handmatig doen is echter veel te lastig en tijdrovend. Met de Sitemap Generator is dit proces geautomatiseerd en kan ik gemakkelijk een sitemap genereren die alle afzonderlijke pagina's bevat. Zo kan ik ervoor zorgen dat zoekmachines deze pagina's beter kunnen vinden en indexeren, wat de zichtbaarheid van mijn website verbetert.
</p>

<br>

<footer>
    <a href="/blog" class="btn variant-filled">
        <KeyboardReturn />
        <span><b>Keer Terug</b></span>
    </a>

    <a
        href="https://github.com/rikkertthedeveloper/sitemap-generator"
        class="btn variant-filled"
    >
        <GitHub />
        <span><b>Sitemap Generator Github Repository</b></span>
    </a>
</footer>
