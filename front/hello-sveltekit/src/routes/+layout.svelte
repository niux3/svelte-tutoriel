<script>
    import Header from '$lib/components/Header.svelte'
    let { children } = $props()
</script>

<main class="container">
    <Header />
    {@render children()}
</main>

<style>
.container{
    max-width: 720px;
    color: #444;
}
</style>
