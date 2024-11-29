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
