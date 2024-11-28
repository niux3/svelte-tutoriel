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
