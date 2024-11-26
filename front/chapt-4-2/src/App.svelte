<script>
    let hobbies = $state(['cinéma', 'voyage', 'musique', 'théatre', 'restaurant', 'bar', 'couture'])
    let accept = $state(false)
    let name = $state('')
    let days = $state([
        'lundi',
        'mardi',
        'mercredi',
        'jeudi',
        'vendredi',
        'samedi',
        'dimanche',
    ])
    let hasHobbies = $state(['oui', 'non'])
    let daySelected = $state("")
    let choiceHasHobbies = $state("")
    let choicesHobbies = $state([])
    let message = $state("")
    let send = $state(false)
    let onSubmit = (e) =>{
        e.preventDefault()
        let output = ""
        if(name !== ""){
            output += `Votre nom est ${name}. `
        }

        if(days[daySelected] !== undefined){
            output += `Vous avez sélectionné le ${days[daySelected]}. `
        }

        if(choiceHasHobbies == "oui" && choicesHobbies.length){
            output += `Vos loisirs préférés sont : ${choicesHobbies.join(', ')}. `
        }

        output += `Votre inscription est ${accept?'active':'inactive'}.`
        message = output
        send = true
    }
    let goBack = (e)=>{
        send = false
    }
</script>

{#if !send}
<form onsubmit={onSubmit}>
    <p class="input text">
        <label for="name">Votre nom</label>
        <input type="text" id="name" bind:value={name} class="form-control">
    </p>
    <p class="input select">
        <label for="days">jour de la semaine préféré</label>
        <select name="days" id="days" bind:value={daySelected} class="form-control">
            <option value="">choisir un jour</option>
            {#each days as day, index}
            <option value={index}>{day}</option>
            {/each}
        </select>
    </p>
    <p>
        {#each hasHobbies as hasHobby, index}
        <span class="input radio form-check">
            <input type="radio" id={'__'+index} value={hasHobby} bind:group={choiceHasHobbies} class="form-check-input" />
            <label for={'__'+index} class="form-check-label">{hasHobby}</label>
        </span>
        {/each}
    </p>
    {#if choiceHasHobbies == "oui"}
    <fieldset>
        <legend>vos loisirs préférées</legend>
        {#each hobbies as hobbie, index}
        <p class="input checkbox form-check">
            <input type="checkbox" id={'_'+index} value={hobbie} bind:group={choicesHobbies} class="form-check-input" />
            <label for={'_'+index} class="form-check-label">{hobbie}</label>
        </p>
        {/each}
    </fieldset>
    {/if}
    <p class="input checkbox form-check">
        <input type="checkbox" id="accept" bind:checked={accept} class="form-check-input">
        <label for="accept" class="form-check-label">accepter inscription</label>
    </p>
    <p class="input submit">
        <button type="submit" class="btn btn-primary">envoyer</button>
    </p>
</form>
{:else}
    <p>{message}</p>
    <p><button onclick={goBack} class="btn btn-primary">revenir</button></p>
{/if}
