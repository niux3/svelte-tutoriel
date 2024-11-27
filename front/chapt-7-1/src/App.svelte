<script>
    import Demo from './lib/Demo.svelte';

    let show = $state(false);
</script>

<label>
    <input type="checkbox" bind:checked={show}>
    Show
</label>
{#if show}
    <Demo />
{/if}
