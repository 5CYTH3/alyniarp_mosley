<script lang="ts">
    export let open: boolean = false;

    export let onClick = () => open = !open;

</script>

<button on:click="{onClick}">
    <svg viewBox="0 0 100 100" 
        fill="none" 
        stroke="currentColor" 
        class:open 
        stroke-width="5" 
        width="500"
    >
        <path d="m 30,33 h 40" class="top"></path>
        <path d="m 30,50 h 40" class="middle"></path>
        <path d="m 30,67 h 40" class="bottom"></path>
    </svg>
</button>

<style>
    .top {
        stroke-dasharray: 40 160;
    }

    .middle {
        transform-origin: 50%;
    }

    .bottom {
        stroke-dasharray: 40 160;
    }

    .open {
        transform: rotate(45deg);
    }

    .open .top, .open .bottom {
        stroke-dashoffset: -64px;
    }
</style>