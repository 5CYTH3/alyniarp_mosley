<script lang="ts">
    import { isDark } from "$lib/functions/stores";
    import { fly } from "svelte/transition";

    let state: boolean;
    let list = [1];

    function updated() {
        state = !state
        isDark.set(state);
    }

</script>

<div on:click="{updated}" class="border-2 dark:border-stone-50 dark:bg-slate-700 bg-stone-50 border-slate-700 w-14 h-8 rounded-full cursor-pointer">
    <div transition:fly id="round" class="rounded-full dark:bg-gray-50 bg-slate-700 h-5 w-5 relative top-1 left-1"></div>
</div>

<style>
    
</style>