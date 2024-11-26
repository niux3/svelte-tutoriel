<script>
    import TaxeCalculator from './lib/TaxeCalculator.svelte'

    let taxecalculator 
    let taxRate = $state(0) 
    let grandTotal = $state(0)
    let update = e => {
        taxRate = taxecalculator.taxRate
        grandTotal = taxecalculator.getGrandTotal()
    }
</script>

<TaxeCalculator bind:this={taxecalculator} />

<button class="btn btn-primary" onclick={update}>Update</button>
<div>
Le taux est de {(taxRate * 100).toFixed(2)}%.
Le montant total est de {grandTotal.toFixed(2)}
</div>
