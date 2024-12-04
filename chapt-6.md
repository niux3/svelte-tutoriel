# divers

## Insérer du html dans un composant

l'utilisation de la fonction @html permet d'afficher du html lorsque la chaine de caractères contient des élements html. Sans ça, les html html seront échappés. Si on veut nettoyer la chaine de caractères, on peut utiliser [sanitize](https://www.npmjs.com/package/sanitize-html). N'oublions pas qu'une alternative intéressante soit d'utiliser le markdown et de faire la translation avec le package npm [markdown-it](https://www.npmjs.com/package/markdown-it). 

```html
<script>
    let textHTML = '<p>du texte</p>'
</script>

<div>{textHTML}</div>
<div>{@html textHTML}</div>
```
## snippet et render

On peut ajouter des snippet au sein d'un composant et ensuite faire un rendu de celle-ci

```html
{#snippet sum(a, b)}
	<p>{a} + {b} = {a + b}</p>
{/snippet}

{@render sum(1, 2)}
{@render sum(3, 4)}
{@render sum(5, 6)}
```

## debug

```html
<script>
	let user = {
		firstname: 'Ada',
		lastname: 'Lovelace'
	};
</script>

{@debug user}

<h1>Hello {user.firstname}!</h1>
```

## la directive use

Lorsque le composant est monté, **use** permet d'appliquer une fonction. **Attention**, si cette donnée est un state, il n'y aura pas de changement. Autant utiliser la directive bind ! 

```html
<script>
    const focus = element => {
		element.focus()
	}
</script>

<input type="text" use:focus />
```

Parfois, vous souhaitez passer des données : 

```html
<script>
    let data = 'une donnée'
    const getData = (element, data) => {
		element.value = data
	}
</script>

<input type="text" use:getData={data} />
```

## Composants spéciaux svelte

Demo.svelte
```html
<script>
    let data = 'une donnée'
    const getData = (element, data) => {
		element.value = data
	}
</script>

<input type="text" use:getData={data} />
```

App.svelte
```html
<script>
    import Demo from './lib/Demo.svelte'
    let size = $state({
        x: window.innerWidth,
        y: window.innerHeight
    })
    let data = $state('')
    let tag = $state('span')
    const onKeyUp = e => data += e.key
    const onResize = e => size = {
        x: window.innerWidth,
        y: window.innerHeight
    }
    const onClick = e => tag = tag === 'span'? 'mark' : 'span'
</script>

<svelte:window onkeyup={onKeyUp} onresize={onResize} />

<svelte:head>
	<title>Hello world!</title>
	<meta name="description" content="C'est ici que la description est utilisée pour l'optimisation des moteurs de recherche (SEO)" />
</svelte:head>

<ul>
    <li>x : {size.x}</li>
    <li>y : {size.y}</li>
</ul>
<p>Résultat du keyup : {data}</p>

<svelte:component this={Demo} />
<hr>
<button class="btn btn-primary" onclick={onClick}>changer l'élément html</button>
<p>
    <svelte:element this={tag}>du texte</svelte:element>
</p>

<style>
mark{
    color: white;
    background: red;
}
</style>
```


## fetch

voir le projet 6-2 (/front/chapt-6-2)
