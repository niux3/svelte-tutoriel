<script>
	import { createCount } from './stores.js';
    let count = createCount()
</script>

<h1>le compteur {$count}</h1>

<button class="btn btn-primary" onclick={count.increment}>+</button>
<button class="btn btn-primary" onclick={count.decrement}>-</button>
<button class="btn btn-danger" onclick={count.reset}>reset</button>
