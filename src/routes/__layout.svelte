<script>
    import Navigator from "$lib/components/Navigator.svelte";
    import NavigatorItem from "$lib/components/NavigatorItem.svelte";
    import { isDark } from "$lib/functions/stores";

    let isDarkScoped;

    isDark.subscribe(val => {
        isDarkScoped = val;
    })

</script>


<svelte:body class="{isDarkScoped ? "dark" : ""}"></svelte:body>
<Navigator>
    <NavigatorItem to="/Catalog">Catalogue</NavigatorItem>
    <NavigatorItem to="/Admin">Admin</NavigatorItem>
</Navigator>
<main>
    <slot></slot>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>