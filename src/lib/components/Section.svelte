<script lang="ts">
    export let alt: boolean = false;
</script>

{#if alt === true}
    <section id="section" class="h-auto w-full bg-green-200">
        <slot></slot>
    </section>
{:else}
    <section id="section" class="h-96 w-full">
        <slot></slot>
    </section>
{/if}