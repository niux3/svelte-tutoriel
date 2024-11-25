<script>
    import { Counter } from './lib/Counter.svelte.js'

    let counter = Counter(3)
    counter.setCount(20)
</script>

<main>
    <p>{counter.count} - {counter.double}</p>
    <a href="//google.com" on:click|preventDefault={counter.increment} class="button">+</a>
    <a href="//google.com" on:click|preventDefault={counter.decrement} class="button">-</a>
</main>

<style>

</style>
