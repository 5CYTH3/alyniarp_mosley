<script lang="ts">
    export let to: string;
</script>

<li class="ml-2 mr-2 text-xl hidden sm:flex leading-none">
    <a href={to} class="font-noto dark:text-gray-200 leading-none"><slot /></a>
</li>
