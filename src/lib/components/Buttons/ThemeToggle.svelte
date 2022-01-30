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

<div on:click="{updated}" class="border-2 dark:border-stone-50 dark:bg-gray-800 bg-stone-50 border-gray-800 w-12 h-6 rounded-full cursor-pointer">
    <div transition:fly id="round" class="rounded-full dark:bg-gray-50 bg-gray-800 h-3 w-3 relative top-1 left-1"></div>
</div>