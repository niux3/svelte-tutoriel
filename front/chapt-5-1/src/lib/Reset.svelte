<script>
    import { count } from '../stores.js'
</script>

<button class="btn btn-danger" onclick={e => count.set(0)}>
    <span>Reset : </span>
    <span>{$count}</span>
</button>
