<script>
    let { post } = $props()
</script>
<article class="card mb-3">
    <img src="https://placehold.co/600x400/png" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">{post.title.substr(0, 30)}</h5>
        <p class="card-text">{post.body.substr(0, 100)}...</p>
        <a href={`/articles/${post.id}`} class="btn btn-primary">Lire la suite</a>
    </div>
</article>
