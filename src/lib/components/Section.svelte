<script lang="ts">
    export let alt: boolean = false;
</script>

{#if alt === true}
    <section id="section" class="h-auto w-full bg-green-200 dark:bg-gray-800">
        <slot></slot>
    </section>
{:else}
    <section id="section" class="h-auto w-full dark:bg-gray-800">
        <slot></slot>
    </section>
{/if}