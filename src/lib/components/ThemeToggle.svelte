<script lang="ts">
    import { isDark } from "$lib/functions/stores";
    let state: boolean = false;

    function updated() {
        isDark.update(val => {
            return state = !val
        })
    }

</script>

<div on:click="{updated}" class="border-2 border-b-stone-50 bg-slate-700 w-16 h-8 rounded-full">
    <div id="round" class="rounded-full bg-gray-50 h-6 w-6 absolute top-1 left-1"></div>
</div>