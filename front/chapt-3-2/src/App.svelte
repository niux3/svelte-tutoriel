<script>
    import Navigation from './lib/Navigation.svelte'

    let data = $state(async ()=>{
        let response = await fetch('/data.json');
        if(response.ok){
            let data = await response.json();
            return data;
        } else {
            throw new Error("le serveur ne répond pas");
        }
    })
</script>

<Navigation {data} />
