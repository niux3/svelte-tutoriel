<script>
 let status = $state(200)
 let message = $state('un message')
 let isError = $derived(parseInt(status, 10) >= 400)

</script>

<h1>quelque chose</h1>
<form>
    <div>
        <label for="status">status</label>
        <input type="number" bind:value={status} class="form-control">
    </div>
</form>
<p class="h1" class:error={isError}>{message}</p>

<style>
:global(h1){
    color: pink;
}
.error{
    color: red
}
</style>
