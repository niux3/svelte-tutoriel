<script>
    import Counter from './lib/Counter.svelte'
    import CounterAutoSubscribe from './lib/CounterAutoSubscribe.svelte'
    import CounterSubscribe from './lib/CounterSubscribe.svelte'
    import Reset from './lib/Reset.svelte'
</script>

<Counter></Counter>
<Counter></Counter>
<Counter></Counter>
<hr>
<CounterAutoSubscribe></CounterAutoSubscribe>
<hr>
<Reset></Reset>
<hr>
<CounterSubscribe></CounterSubscribe>
