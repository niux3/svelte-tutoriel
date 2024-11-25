<script>
    import Select from './lib/Select.svelte'
    let selected = $state('')
    let options = $state([
        {label: 'Vert'},
        {label: 'Jaune'},
        {label: 'Rouge'},
        {label: 'Orange'},
        {label: 'Violet'},
        {label: 'Rose'},
    ])
    let onChange = e => selected = e.target.value
</script>

<Select options={options} onChange={onChange} />
<p>{selected}</p>
