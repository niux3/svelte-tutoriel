<script>
    import { count } from '../stores.js'

    let value = $state(0)
    count.subscribe(c => value = c)

</script>

<button class="btn btn-success" onclick={e => count.update(count => count += 1)}>
    <span>Click : </span>
    <span>{value}</span>
</button>
