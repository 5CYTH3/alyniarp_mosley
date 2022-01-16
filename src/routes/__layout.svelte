<script>
    import Navigator from "$lib/components/Navigator.svelte";
    import NavigatorItem from "$lib/components/NavigatorItem.svelte";
</script>

<Navigator>
    <NavigatorItem to="/Catalog">Catalogue</NavigatorItem>
    <NavigatorItem to="/Admin">Admin</NavigatorItem>
</Navigator>
<main>
    <slot></slot>
</main>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>