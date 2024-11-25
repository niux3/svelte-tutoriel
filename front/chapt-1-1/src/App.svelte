<script>
    let name = $state('world')
    let color = $state('#ff0000')
    let isUpper = $state(false)
    let sentence = $derived(`Hello ${name}`)
    let sentenceUpper = $derived(isUpper ? sentence.toUpperCase() : sentence)
</script>

<main>
    <h1 style="color:{color}">{sentenceUpper}</h1>
    <p><input type="text" bind:value={name}></p>
    <p><input type="color" bind:value={color}></p>
    <p>
        <label>
            <input type="checkbox" bind:checked={isUpper}>
            <span>en majuscule ?</span>
        </label>
    </p>
</main>

<style>
h1{
    color: orangered;
}
</style>
