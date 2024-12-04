# le routing

Il n'est pas forcément nécessaire d'utiliser des extensions de svelte [(svelte-routing)](https://www.npmjs.com/package/svelte-routing)  pour gérer le routing. Sans utiliser l'objet History en JS natif, on peut facilement gérer un système de routes. Pour des raisons d'accessibilités, il est vivement conseillé d'utiliser l'objet History. Un autre avantage d'utiliser History est que vous pouvez obtenir des urls en fonction du contexte ! Mais si le métier demande qu'il n'y ait pas d'url, il est tout à fait possible de le faire. On peut utiliser les boutons précédent et suivant du navigateur ! 

## système simple : 

- ./lib/pages/Home.svelte
- ./lib/pages/About.svelte
- ./lib/pages/Contact.svelte

```html
<h1>Home / About / Contact</h1>
```
./lib/pages/index.js
```javascript
export {default as Home} from './Home.svelte'
export {default as About} from './About.svelte'
export {default as Contact} from './Contact.svelte'
```
./lib/Navigation.svelte
```html
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
```
App.svelte
```html
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
```

## hash

Un des avantages d'utiliser cette technique, on n'a pas besoin de gérer History. Mais il va falloir gérer le not Found et lors de l'ouverture de l'application. 

- ./lib/pages/Home.svelte
- ./lib/pages/About.svelte
- ./lib/pages/Contact.svelte
- ./lib/pages/Notfound.svelte

```html
<h1>Home / About / Contact / Not found</h1>
```
./lib/pages/index.js
```javascript
export {default as Home} from './Home.svelte'
export {default as About} from './About.svelte'
export {default as Contact} from './Contact.svelte'
export {default as NotFound} from './NotFound.svelte'
```

./lib/Navigation.svelte
```html
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
```
App.svelte
```html
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
```
