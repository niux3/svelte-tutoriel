<script>
    import { count } from '../stores.js'
</script>

<button class="btn btn-primary" onclick={e => count.update(count => count += 1)}>
    <span>Click : </span>
    <span>{$count}</span>
</button>
