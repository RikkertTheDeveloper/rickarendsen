<script>
    import { Avatar } from "@skeletonlabs/skeleton";

    export let category;
    export let title;
    export let description;
    export let priority;
    export let author;
    export let date;
    export let slug;
    export let profile;
    export let tags;
</script>

<div class="w-1/2 max-sm:w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4">
    <a
        class="card variant-ghost-{priority} rounded-3xl card-hover overflow-hidden"
        href="/{category.toLowerCase()}/{slug}"
    >

        <div class="p-4 space-y-4">
            <h6>{category}</h6>
            <h3>{title}</h3>

            <article>
                <p>
                    {description}
                </p>
            </article>
        </div>

        <hr class="opacity-50" />

        <footer class="p-4 flex justify-start items-center space-x-4">
            <Avatar src={profile} width="w-8" />

            <div class="flex-auto flex justify-between items-center">
                <h6 class="font-bold">Door {author}</h6>
                <small>Op {date}</small>
            </div>
        </footer>

        <div class="tags pl-4 pb-2 space-x-2">
                {#each tags as tag, index}
                    <span class="chip variant-{index == 0 ? "filled" : "soft"}">#{tag}</span>
                {/each}
        </div>
    </a>
</div>
