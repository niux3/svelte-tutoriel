<script>
    import UnComposant from './lib/UnComposant.svelte'
    import UnAutreComposant from './lib/UnAutreComposant.svelte'
    import EncoreUnComposant from './lib/EncoreUnComposant.svelte'
    let uneVar = $state('')
    let message = $state('')
    let uneAutreVar = $state('')
    let faitQuelqueChose = (e) => uneVar = "autre valeur"
    let faitAutreChose = (e) => uneAutreVar = "encore une valeur"
    let onMessage = e => message = e.target.value

    let civilities = $state(['Mademoiselle', 'Madame', 'Monsieur'])
    let civility = $state('')
    let handleSelect = event => civility = event.detail
</script>

<UnComposant on:click={e => uneVar = "quelque chose"} />
<UnComposant on:click={faitQuelqueChose} />
<UnComposant on:click={faitQuelqueChose} on:click={faitAutreChose} />

<p>une var : {uneVar}</p>
<p>une autre var : {uneAutreVar}</p>

<div>
    <UnAutreComposant { onMessage } />
</div>
<p>{message}</p>
<hr>
<EncoreUnComposant labels={civilities} value={civility} on:select={handleSelect} />
{#if civility}
<div>vous avez choisi {civility}.</div>
{/if}
