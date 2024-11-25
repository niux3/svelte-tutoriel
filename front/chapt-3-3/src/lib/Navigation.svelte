<script>
    let { data } = $props()
</script>
<nav>
    {#await data}
    <p>chargement....</p>
    {:then rows}
    <ul>
        {#each rows as row}
        <li>
            <strong>{row.name}</strong>
            <ul>
                {#each row.subcategory as category}
                <li><a href="/{row.slug}/{category.slug}">{category.name}</a></li>
                {/each}
            </ul>
        </li>
    {/each}
    </ul>
    {:catch error}
        <div class="error">Error: {error.message}</div>
    {/await}
</nav>
