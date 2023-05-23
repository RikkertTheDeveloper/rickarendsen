<script>
    import PostCard from "../../components/post-card.svelte";
</script>

<div class="top-section">
    <h2 class="mt-5 mb-5 text-left max-sm:text-center font-bold">Blog</h2>
    <p class="mb-2">
        Op deze pagina kunt u een actueel overzicht bekijken van alle blogposts
        die zijn geplaatst op mijn website. Mijn blog richt zich voornamelijk op
        het delen van mijn technische ervaringen, zowel succesvolle projecten
        als uitdagingen die ik ben tegengekomen. <br /><br /> Ik neem u mee op
        mijn reis door verschillende technische onderwerpen, waarbij ik
        inzichten deel over opkomende technologieën,
        <a href="/projecten">interessante projecten</a>
        waar ik aan werk, en mijn <a href="/labs">persoonlijke onderzoeken</a> in
        de wereld van technologie. Of u nu geïnteresseerd bent in softwareontwikkeling,
        data-analyse, kunstmatige intelligentie, of andere technische gebieden, mijn
        blog biedt een plek waar ik mijn kennis en ervaringen deel. Ik geloof in
        het belang van het continu blijven leren en groeien als technoloog, en deze
        blog stelt me in staat om mijn bevindingen te delen en anderen te inspireren.
    </p>
    <br /> <br />
</div>

<div class="flex flex-col space-y-2 mb-5">
    <PostCard
        category="Blog"
        title="Mijn Deelname aan WorldSkills Netherlands"
        author="Rick Arendsen"
        tags={["nieuws", "development", "worldskills"]}
        priority="primary"
        date="21-03-2023 - 15:15"
        slug="mijn-deelname-aan-worldskills-netherlands"
        profile="https://media.licdn.com/dms/image/D4E03AQHoRXxiQ3vGbA/profile-displayphoto-shrink_200_200/0/1674656535932?e=1684972800&v=beta&t=fD1FybpxUjn-TsvtsQiok94DEX1YvI8OUkkJeyWckqs"
        description="Op 23 en 24 maart doe ik mee aan het nationale kampioenschap van WorldSkills Netherlands. Hier neem ik het op tegen de beste 7 MBO Software Developers van het land."
    />

    <PostCard
        category="Blog"
        title="Wat is Flask Testing Suite?"
        author="Rick Arendsen"
        date="21-03-2023 - 14:27"
        tags={["tips", "development", "projecten"]}
        priority="warning"
        slug="wat-is-flask-testing-suite"
        profile="https://media.licdn.com/dms/image/D4E03AQHoRXxiQ3vGbA/profile-displayphoto-shrink_200_200/0/1674656535932?e=1684972800&v=beta&t=fD1FybpxUjn-TsvtsQiok94DEX1YvI8OUkkJeyWckqs"
        description="Ik hou heel erg van mijn technische kennis uit de dagen, daarom heb ik een zero-boilerplate testing suite gemaakt die opgezet kan worden binnen enkele seconden."
    />

    <PostCard
        category="Blog"
        title="Wat is Sitemap Generator?"
        author="Rick Arendsen"
        date="28-03-2023 - 15:30"
        tags={["development", "projecten", "seo"]}
        priority="warning"
        slug="wat-is-sitemap-generator"
        profile="https://media.licdn.com/dms/image/D4E03AQHoRXxiQ3vGbA/profile-displayphoto-shrink_200_200/0/1674656535932?e=1684972800&v=beta&t=fD1FybpxUjn-TsvtsQiok94DEX1YvI8OUkkJeyWckqs"
        description="Sitemaps zijn vitaal voor de SEO van een website, maar hoe maak je makkelijk sitemaps van dynamische content? Deze tool helpt u hierbij."
    />

    <PostCard
        category="Blog"
        title="Retrospective Worldskills Netherlands"
        author="Rick Arendsen"
        date="15-05-2023 - 16:21"
        tags={["nieuws", "development", "worldskills"]}
        priority="warning"
        slug="retrospective-worldskills-netherlands"
        profile="https://media.licdn.com/dms/image/D4E03AQHoRXxiQ3vGbA/profile-displayphoto-shrink_200_200/0/1674656535932?e=1684972800&v=beta&t=fD1FybpxUjn-TsvtsQiok94DEX1YvI8OUkkJeyWckqs"
        description="Ik heb recent deelgenomen aan de finales van WorldSkills Netherlands, in deze blog post deel ik mijn ervaringen over de wedstrijd."
    />
</div>
