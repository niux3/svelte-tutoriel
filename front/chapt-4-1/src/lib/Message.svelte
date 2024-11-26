<script>
    let { display } = $props()
</script>

{#if display }
    <p>je m'affiche</p>
{:else}
    <p>je suis masqué</p>
{/if}
