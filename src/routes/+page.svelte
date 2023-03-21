<script>
    import Blog from "svelte-material-icons/Podcast.svelte";
    import GitHub from "svelte-material-icons/GitHub.svelte";

    import { slide } from "svelte/transition";
</script>

<div class="w-5/6 mt-5 m-auto" transition:slide|local>
    <span>Hallo, ik ben,</span>
    <h1 class="font-black">Rick Arendsen</h1>
    <span class="text-2xl">Full Stack Developer</span>

    <div class="badge-list flex align-center mt-2 flex-wrap space-x-2">
        <span class="chip variant-soft hover:variant-filled-primary"
            >Projecten</span
        >
        <span class="chip variant-soft hover:variant-filled-secondary"
            >Bibliotheken</span
        >
        <span class="chip variant-soft hover:variant-filled-tertiary"
            >Contributies</span
        >
    </div>

    <div class="about-me ml-0 max-sm:ml-2">
        <h2 class="mt-5">Wie Ben Ik?</h2>
        <p>
            Hallo, mijn naam is Rick Arendsen. Ik ben 18 jaar oud en een Student
            op het <a href="https://graafschapcollege.nl/">Graafschap College</a
            > in Doetinchem. Mijn hobby's zijn gamen en programmeren. Naast mijn
            passie voor gaming en programmeren, heb ik ook een brede interesse in
            technologie en innovatie. Ik vind het fascinerend om te zien hoe technologie
            de wereld om ons heen verandert en verbetert. Daarnaast ben ik ervan
            overtuigd dat de toekomst van de technologie grenzeloos is, en ik wil
            hier graag een actieve bijdrage aan leveren.
        </p>
        <br />

        <p>
            Tijdens mijn studie aan het Graafschap College heb ik een stevige
            basis opgebouwd in diverse programmeertalen en technologieën zoals :
            Java, C++, HTML/CSS en JavaScript. Daarnaast heb ik ook geleerd om
            probleemoplossend te denken en om mijn code goed te documenteren.
            Dit zijn essentiële vaardigheden in de software en game development
            industrie. In de afgelopen jaren heb ik verschillende projecten
            uitgevoerd, zowel individueel als in teamverband. Hierbij heb ik
            geleerd hoe ik mijn vaardigheden en kennis kan toepassen in de
            praktijk, en hoe ik kan samenwerken met anderen om tot een succesvol
            resultaat te komen. Naast dat ben ik erg trots op het feit dat ik
            bij elk project waar ik aan gewerkt heb, nieuwe dingen geleerd heb
            en mijn vaardigheden verder heb kunnen ontwikkelen.
        </p>

        <p>
            <br />
            Na mijn studie ben ik van plan om mijn carrière voort te zetten in deze
            industrie. Graag zou ik gaan werken aan innovatieve projecten en nieuwe
            technologieën die de wereld verder kunnen verbeteren. Kortom ik ben ervan
            overtuigd dat ik met mijn passie, kennis en vaardigheden een waardevolle
            bijdrage kan leveren aan elke organisatie die geïnteresseerd is in software
            development of game development.
        </p>
    </div>

    <footer class="mt-2">
        <a href="/blog" class="btn variant-filled">
            <Blog />
            <span><b>Blog</b></span>
        </a>

        <a href="https://www.github.com/rikkertthedeveloper" class="btn variant-filled">
            <GitHub />
            <span><b>GitHub Profiel</b></span>
        </a>
    </footer>
</div>
