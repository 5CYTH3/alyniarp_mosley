<script lang="ts">
    export const awaitMode: boolean = true;
    export const dataSource: object = {};
</script>

{#if awaitMode}
    <div class="w-48 h-36 bg-slate-500" />
{:else}
    <div class="w-48 h-36 bg-slate-500" />
{/if}
