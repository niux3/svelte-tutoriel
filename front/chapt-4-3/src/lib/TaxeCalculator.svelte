<script>
    let price = $state()
    let prices = $state([])
    let total = $derived.by(()=> prices.reduce((a, b) => a + b, 0))

    function add() {
        prices = [...prices, price] // insère et met à jour la variable prices !!!
        price = ''
    }
    export const taxRate = 0.25
    export const getGrandTotal = () => total * (1 + taxRate)
</script>

<input class="form-control" type="number" bind:value={price} />
<button onclick={add} class="btn btn-primary">Add</button>
{#each prices as price}
    <div>{price}</div>
{/each}
<hr>
<p>Total {total} avec un taux {(taxRate * 100).toFixed(2)}%</p>
