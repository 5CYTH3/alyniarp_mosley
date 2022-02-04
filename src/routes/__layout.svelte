<script>
    import CrossButton from "$lib/components/Buttons/CrossButton.svelte";
    import Navigator from "$lib/components/Navigator/Navigator.svelte";
    import NavigatorItem from "$lib/components/Navigator/NavigatorItem.svelte";
    import ThemeToggle from "$lib/components/Buttons/ThemeToggle.svelte";
    import { isDark } from "$lib/functions/stores";

    let isDarkScoped;

    isDark.subscribe((val) => {
        isDarkScoped = val;
    });
</script>

<main class={isDarkScoped ? "dark" : null}>
    <Navigator>
        <NavigatorItem to="/Catalog">Catalogue</NavigatorItem>
        <NavigatorItem to="/Admin">Admin</NavigatorItem>
        <ThemeToggle />
        <CrossButton />
    </Navigator>
    <slot />
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap");
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
