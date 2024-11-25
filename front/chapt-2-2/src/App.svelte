<script>
    import { onMount } from 'svelte'
    import { pow } from './lib/Pow.svelte'
    import Status from './lib/Status.svelte'
    import Cylinder from './lib/Cylinder.svelte'


    console.log(pow(4))
    onMount(()=>{
        console.log(pow(8))
    })
</script>

<Status />
<h1>autre chose</h1>
<Cylinder />

<style></style>
