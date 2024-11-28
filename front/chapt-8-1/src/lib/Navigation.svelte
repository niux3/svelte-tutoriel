<script>
    let { pages, pageName = $bindable() } = $props()
</script>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                {#each Object.keys(pages) as routeName}
                <li class="nav-item">
                    <a class="nav-link" class:active={pageName === routeName} onclick={e => { e.preventDefault(); pageName = routeName }} data-name={routeName} aria-current="page" href="#">{routeName}</a>
                </li>
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
