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
