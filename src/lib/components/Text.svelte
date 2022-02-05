<script lang="ts">
    type Size =
        | "xs"
        | "sm"
        | "base"
        | "md"
        | "lg"
        | "xl"
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl";
    export let size: Size = "base";

    let className = "";
    export { className as class };
</script>

<p class="dark:text-gray-200 text-black text-{size} {className} leading-none">
    <slot />
</p>
