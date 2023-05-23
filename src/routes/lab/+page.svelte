<script>
    import PostCard from "../../components/post-card.svelte";
</script>

<div class="top-section">
    <h2 class="mt-5 mb-5 text-left max-sm:text-center font-bold">
        Laboratorium
    </h2>

    <p class="mb-2">
        Welkom op de laboratoriumpagina! Hier deel ik graag met u mijn
        IT-experimenten en onderzoeksprojecten. Deze pagina is een bron van
        spannende ontdekkingen en interessante inzichten in de wereld van
        informatietechnologie. <br /><br />
        Als fervent IT-liefhebber en onderzoeker ben ik voortdurend bezig met het
        verkennen van nieuwe technologieën, het testen van innovatieve concepten
        en het duiken in uitdagende vraagstukken. Op deze pagina vindt u regelmatige
        updates en gedetailleerde berichten over mijn experimentele projecten. Of
        het nu gaat om het ontwikkelen van een nieuwe softwaretoepassing, het verkennen
        van geavanceerde algoritmen, het bouwen van prototypen van nieuwe apparaten
        of het onderzoeken van opkomende trends in de IT-sector, ik deel graag mijn
        bevindingen en ervaringen met u.
    </p>
    <br />
</div>

<div class="flex flex-col space-y-2">
    <PostCard
        category="Lab"
        title="De Rust Programmeertaal"
        author="Rick Arendsen"
        tags={["rust", "low-level", "programming"]}
        priority="secondary"
        date="23-05-2023 - 11:00"
        slug="de-rust-programmeertaal"
        profile="https://media.licdn.com/dms/image/D4E03AQHoRXxiQ3vGbA/profile-displayphoto-shrink_200_200/0/1674656535932?e=1684972800&v=beta&t=fD1FybpxUjn-TsvtsQiok94DEX1YvI8OUkkJeyWckqs"
        description="Ik ben recent begonnen met het leren van de Rust programmeertaal. Maar wat is rust nou precies, en hoe kunnen wij het toepassen? In dit artikel leest u hier meer over."
    />
</div>
