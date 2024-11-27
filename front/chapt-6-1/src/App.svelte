<script>
    let textHTML = '<p>du texte</p>'
    let data = 'une donnée'
    const focus = element => {
        element.focus()
    }
    const getData = ( element, data ) => element.value = data
</script>

<h1>du html dans une var</h1>
<div>{textHTML}</div>
<div>{@html textHTML}</div>
<hr>
<h1>les snippets</h1>
{#snippet sum(a, b)}
	<p>{a} + {b} = {a + b}</p>
{/snippet}

{@render sum(1, 2)}
{@render sum(3, 4)}
{@render sum(5, 6)}
<hr>
<h1>la directive use</h1>
<h2>focus</h2>
<input type="text" class="form-control" use:focus />
<h2>passage de données</h2>
<input type="text" class="form-control" use:getData={data} />
