<script>
    import Navigation from './lib/Navigation.svelte'
    import {Home, About, Contact, NotFound} from './lib/pages'

    let pageName = $state('#/home')
    let pages = {
        '#/home': Home,
        '#/about': About,
        '#/contact': Contact,
        '#/not-found': NotFound
    }
    const hashChange = e => {
        let hash = window.location.hash
        let urls = Object.keys(pages)
        let name = urls.find(p => p === hash)
        pageName = name === undefined? urls.find(p => p.includes('not-found')) : hash
    }
    const loadApp = e =>{
        window.location.hash = window.location.hash === ''? pageName : window.location.hash
        hashChange(e)
    }
</script>

<svelte:window onhashchange={hashChange} onload={loadApp} />
<header>
    <Navigation bind:pageName {pages} />
</header>
<div class="mt-3 mb-3">
    <svelte:component this={pages[pageName]} />
</div>
