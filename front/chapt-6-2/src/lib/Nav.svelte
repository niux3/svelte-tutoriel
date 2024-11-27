<script>
    import Button from './Button.svelte'
    let { calls, onSlide } = $props()
</script>

<ul class="nav justify-content-center border p-4">
    {#each calls as call, index}
    <li class="nav-item me-3">
        <Button {call} on:click={onSlide} />
    </li>
    {/each}
</ul>
