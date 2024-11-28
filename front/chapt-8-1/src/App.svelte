<script>
    import Navigation from './lib/Navigation.svelte'
    import {Home, About, Contact} from './lib/pages'

    let pageName = $state('home')
    let pages = {
        'home': Home,
        'about': About,
        'contact': Contact
    }
</script>

<header>
    <Navigation bind:pageName {pages} />
</header>
<div class="mt-3 mb-3">
    <svelte:component this={pages[pageName]} />
</div>
