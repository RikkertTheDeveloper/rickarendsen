<script>
    import PostCard from "../../components/post-card.svelte";
    import { InputChip } from "@skeletonlabs/skeleton";
</script>

<div class="top-section">
    <h2 class="mt-5 mb-5 text-left max-sm:text-center font-bold">Blog</h2>
    <p class="mb-2">
        Op deze pagina kan u een actueel overzicht bekijken van alle blog posts
        die geplaast zijn op mijn website.
    </p>

    <InputChip
        class="w-1/2 my-4 max-sm:w-full"
        rounded="rounded-3xl"
        padding="p-4"
        placeholder="Zoek naar tags"
    />
</div>

<div class="flex flex-row flex-wrap max-sm:flex-col space-y-2">
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

    <!-- Toekomstige Onderwerpen -->
    <!--
        <PostCard
            category="Blog"
            title="Hoe past u test-driven development toe?"
            author="Rick Arendsen"
            date="18-03-2023 - 17:32"
            tags={["tips", "development", "tech"]}
            priority="secondary"
            slug="hoe-past-u-test-driven-development-toe"
            profile="https://media.licdn.com/dms/image/D4E03AQHoRXxiQ3vGbA/profile-displayphoto-shrink_200_200/0/1674656535932?e=1684972800&v=beta&t=fD1FybpxUjn-TsvtsQiok94DEX1YvI8OUkkJeyWckqs"
            description="Test-driven development is een methode om betrouwbare en schaalbare software uit te brengen. Maar wat houdt dit in? In dit artikel leert u hoe u het beste test-driven development toe kan passen in uw ontwikkelproces."
        />

        <PostCard
            category="Blog"
            title="Wat is het MicroService Architectuur?"
            author="Rick Arendsen"
            date="13-03-2023 - 14:27"
            tags={["tips", "development", "tech"]}
            priority="tertiary"
            slug="wat-is-het-microservice-architectuur"
            profile="https://media.licdn.com/dms/image/D4E03AQHoRXxiQ3vGbA/profile-displayphoto-shrink_200_200/0/1674656535932?e=1684972800&v=beta&t=fD1FybpxUjn-TsvtsQiok94DEX1YvI8OUkkJeyWckqs"
            description="In dit artikel laat ik u zien wat het microservice architectuur is en het idee erachter, en wat de voordelen en nadelen zijn. Ook leer u hoe u deze principes toe kan passen bij uw volgende project."
        />

        <PostCard
            category="Blog"
            title="Wat is Flask Testing Suite?"
            author="Rick Arendsen"
            date="21-03-2023 - 14:27"
            tags={["tips", "development"]}
            priority="warning"
            slug="wat-is-flask-testing-suite"
            profile="https://media.licdn.com/dms/image/D4E03AQHoRXxiQ3vGbA/profile-displayphoto-shrink_200_200/0/1674656535932?e=1684972800&v=beta&t=fD1FybpxUjn-TsvtsQiok94DEX1YvI8OUkkJeyWckqs"
            description="Ik hou heel erg van mijn technische kennis uit de dagen, daarom ben ik aan de slag gegaan met een nieuw project om mijn ontwikkelproces sneller te maken. Een zero-boilerplate testing suite die opgezet kan worden binnen enkele seconden."
        /> -->
</div>
