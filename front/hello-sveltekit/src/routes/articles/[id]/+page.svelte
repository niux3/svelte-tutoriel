<script>
    import Card from '$lib/components/Card.svelte'


    let { data } = $props()
    let post = data.post
</script>

<Card {post} />
