<script>
    import { count } from '../stores.js'
</script>

<button class="btn btn-primary" onclick={e => $count++}>
    <span>Click : </span>
    <span>{$count}</span>
</button>
