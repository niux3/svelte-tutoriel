<script>
    import Message from './lib/Message.svelte'
    let display = $state(false)
</script>

<button class="btn btn-primary" onclick={e => display = !display}>affiche/masque</button>
<Message {display} />
