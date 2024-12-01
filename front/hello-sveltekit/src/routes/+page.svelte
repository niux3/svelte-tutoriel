<script>
    import Card from '$lib/components/Card.svelte'


    let { data } = $props()
</script>


<div class="py-5 row">
    {#each data.posts as post, index}
        <div class="col-6 px-1">
            <Card {post} />
        </div>
    {/each}
</div>
