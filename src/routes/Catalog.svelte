<script>
    import Card from "$lib/components/Card.svelte";
    import Text from "$lib/components/Text.svelte";

    let items = [
        {
            name: "Hello",
        },
        {
            name: "Lol",
        },
        {
            name: "Idontcare",
        },
    ];
</script>

<div class="w-full h-auto">
    <Text>All the items available in the mosley</Text>
    <!-- Grid Space (for items) -->
    <div class="grid grid-cols-8">
        {#await items}
            <Card awaitMode />
        {:then value}
            {#each value as item}
                <Card />
            {/each}
        {/await}
    </div>
</div>
