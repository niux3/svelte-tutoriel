<script>
    import { onMount } from 'svelte' 
    import Navigation from './lib/Navigation.svelte'

    let data = $state(null)
    fetch('/data.json').then(resp => resp.json()).then(d => data = d)
</script>

<Navigation {data} />
