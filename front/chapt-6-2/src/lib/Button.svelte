<script>
    let { call } = $props()
</script>

<button class="btn btn-primary" data-slide={call} on:click|preventDefault>appel : {call}</button>
