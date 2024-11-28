<script>
    let data = $state({
        characterName: undefined,
        loading: false,
    });

    const loadData = async ()=> {
        data.loading = true;
        const response = await fetch('https://swapi.dev/api/people/1')
        const character = await response.json();
        data = {
            characterName: character.name,
            loading: false,
        };
    }
</script>

<div>
    <button class="btn btn-primary" onclick={loadData}>Charger les données</button>
    <div>
        {#if data.loading === true}
            Chargement...
        {:else if data.characterName !== undefined}
            {data.characterName}
        {/if}
    </div>
</div>
