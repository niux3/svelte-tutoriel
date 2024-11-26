<script>
    import {createEventDispatcher} from 'svelte'

    let {labels, value} = $props()

    const dispatch = createEventDispatcher()
</script>
{#each labels as label}
    <button class="btn btn-primary" class:selected={label === value} onclick={() => dispatch('select', label)}>{label}</button>
{/each}
<style>
    .selected {
        border: none;
        background-color: darkgray !important;
        color: white !important;
    }
</style>
