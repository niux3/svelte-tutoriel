<script>
    let selected = $state('')
    let mark = $derived(selected.substr(0,1).toUpperCase() + selected.substr(1))

    let colors = $state([
        'rouge',
        'vert',
        'bleu'
    ])

    let users = $state([
        {name: "Raphaël", "occupation": "administrateur"},
        {name: "Felipe", "occupation": "administrateur"},
        {name: "Rodolphe", "occupation": "administrateur"},
        {name: "Laurent", "occupation": "modérateur"},
        {name: "Tony", "occupation": "modérateur"},
        {name: "Renaud", "occupation": "modérateur"},
    ])

    let movies = $state({
       "123": {
           "name": "Autant en emporte le vent",
           "duration": 240
       },
       "456": {
           "name": "Psychose",
           "duration": 120
       },
       "789": {
           "name": "Il était une fois dans l'ouest",
           "duration": 180
       }
   })
</script>

<div>
    <label for="cars">Voitures</label>
    <select id="cars" bind:value={selected} class="form-control">
        <option value="">choisir une marque de voiture</option>
        <option value="citroën">Citroën</option>
        <option value="peugeot">Peugeot</option>
        <option value="renault">Renault</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
        <option value="honda">Honda</option>
        <option value="mercedes">Mercedes</option>
        <option value="nissan">Nissan</option>
        <option value="mazda">Mazda</option>
        <option value="chevrolet">Chevrolet</option>
        <option value="ford">Ford</option>
    </select>
</div>

<div class="mt-5 mb-5">
    {#if selected === 'mercedes'}
        <p>La <strong>{mark}</strong> est connue pour sa robustesse !</p>
    {:else if selected === "fiat"}
        <p>En général, les voitures <strong>{mark}</strong> sont peu onnéreuses !</p>
    {:else if selected === ""}
        <p>Vous n'avez rien choisi</p>
    {:else}
        <p>Vous avez choisi <strong>{mark}</strong>. C'est un bon choix</p>
    {/if}
</div>
<hr>
<ul>
    {#each colors as color, index}
        <li>{index + 1} - {color}</li>
    {/each}
</ul>
<hr>
<ul>
    {#each users as user, index}
        <li>{index + 1} - {user.name} - {user.occupation}</li>
    {/each}
</ul>
<hr>
<ul>
    {#each users as {name, occupation}, index}
        <li>{index + 1} - {name} - {occupation}</li>
    {/each}
</ul>
<hr>
<ul>
    {#each Object.entries(movies) as [key, row], index}
        <li>{key} - {row.name}</li>
    {/each}
</ul>
