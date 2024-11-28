<script>
    let { pages, pageName = $bindable() } = $props()
</script>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">Navbar</a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                {#each Object.keys(pages) as routeName}
                    {#if !routeName.includes('not-found')}
                        <li class="nav-item">
                            <a class="nav-link" class:active={pageName === routeName} aria-current="page" href={routeName}>{routeName.substr(2)}</a>
                        </li>
                    {/if}
                {/each}
            </ul>
        </div>
    </div>
</nav>

<style>
.active{
    text-decoration: underline;
}
</style>
