<script>
    let {options, onChange} = $props()

</script>

<div>
    <label for="color">Couleurs</label>
    <select id="colors" class="form-control" onchange={onChange}>
        <option value="">Choisir une couleur</option>
        {#each options as option}
            <option value={option.label}>{option.label}</option>
        {/each}

    </select>
</div>
