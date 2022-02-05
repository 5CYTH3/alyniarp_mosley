<script lang="ts">
    import Section from "$lib/components/Section.svelte";
    import Text from "$lib/components/Text.svelte";
</script>

<Section>
    <div
        id="banner"
        class="h-banner w-full bg-center"
        style="background-image: url(https://img.gta5-mods.com/q95/images/mosley-s-auto-shop-interior-sp-fivem/763736-0_20200227223812_1.png);"
    />
    <div class="w-full h-24 flex items-center justify-center flex-col">
        <Text size="xl">La voiture de vos rêves à prix réduit</Text>
        <Text
            >Notre site web permet une relation vendeur-client pour faciliter le
            commerce de voitures déjà customisée.</Text
        >
    </div>
</Section>
<Section class="w-full flex justify-center items-center h-80" alt>
    <div class="w-2/3 flex items-center justify-around mb-6 mt-6">
        <img
            src="https://gamesmods.net/uploads/posts/2020-02/1582973740_763736-0_20200227223637_1.png"
            alt=""
            class="h-1/3 w-1/3"
        />
        <div class="w-1/2">
            <Text class="mb-2 font-title" size="4xl"
                >A quoi sert le Mosley ?</Text
            >
            <Text
                >Le Mosley est pour vous une vraie opportunité de trouver un
                véhicule qui vous correspond, déjà custom, et avec le confort de
                connaître le prix total avant l'achat.
            </Text>
        </div>
    </div>
</Section>
