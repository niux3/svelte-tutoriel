# animation

Avec Svelte on peut faire des transitions et animation d'elements. 

## les transitions

App.svelte
```html
<script>
	import { fade, fly } from 'svelte/transition';

	let visible = $state(true);
</script>

<label>
	<input type="checkbox" class="form-check-input" bind:checked={visible} />
	<span>visible</span>
</label>

<h1>Transitions</h1>
<h2>basique</h2>
{#if visible}
	<p transition:fade>
        Je te vois ou pas
	</p>
{/if}
<hr>
<h2>avec paramètres</h2>
{#if visible}
    <p transition:fly={{ x: 200, duration: 400 }}>
        Je te vois ou pas
	</p>
{/if}
<hr>
<h2>in / out</h2>
{#if visible}
    <p in:fly={{ x: 200, duration: 400, delay: 400 }} out:fade>
        Je te vois ou pas
	</p>
{/if}
```

## les animations

Quand on veut utiliser le système animate, il faut obligatoirement que l'objet animé soit dans un {#each}

App.svelte
```html
<script>
	import { flip } from 'svelte/animate';

	let horizontal = $state(false);
	let next = $state(1);
	let list = $state([]);
	function addItem() {
		list = [next++, ...list];
		// list.unshift(next++) // eviter autant que possible => source de bug
	}
	function removeItem(number) {
		list = list.filter(n => n !== number);
	}
	const options = {duration: 500};
</script>

<label>
	<span>Horizontal</span>
	<input type="checkbox" bind:checked={horizontal}>
</label>
<button onclick={addItem}>Add</button>
{#each list as n (n)}
<div animate:flip={options} class="container" class:horizontal>
	<button onclick={() => removeItem(n)}>{n}</button>
</div>
{/each}

<style>
.container {
	width: fit-content;
}
.horizontal {
	display: inline-block;
	margin-left: 10px;
}
</style>
```
