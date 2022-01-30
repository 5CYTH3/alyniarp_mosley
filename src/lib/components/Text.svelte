<script lang="ts">
    type Size = 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'    
    export let size: Size = 'base';

</script>

<p class="dark:text-gray-200 text-black text-{size} text-"><slot></slot></p>