# Les stores

Avant l'introduction des runes dans Svelte 5, les stores étaient la méthode idiomatique pour gérer l'état réactif en dehors des composants. Ce n'est plus le cas désormais, mais vous rencontrerez toujours les stores lors de l'utilisation de Svelte (y compris dans SvelteKit, pour l'instant), il est donc utile de savoir comment les utiliser.

## writable

store.js
```Javascript
import { writable } from 'svelte/store';

export const count = writable(0);
```

Counter.svelte
```html
<script>
    import { count } from '../stores.js'
</script>

<button class="btn btn-primary" onclick={e => count.update(count => count += 1)}>
    <span>Click : </span>
    <span>{$count}</span>
</button>
```
CounterSubscribe.svelte
```html
<script>
    import { count } from '../stores.js'

    let value = $state(0)
    count.subscribe(c => value = c)

</script>

<button class="btn btn-success" onclick={e => count.update(count => count += 1)}>
    <span>Click : </span>
    <span>{value}</span>
</button>
```
Reset.svelte
```html
<script>
    import { count } from '../stores.js'
</script>

<button class="btn btn-danger" onclick={e => count.set(0)}>
    <span>Reset : </span>
    <span>{$count}</span>
</button>
```
app.svelte
```html
<script>
    import Counter from './lib/Counter.svelte'
    import CounterSubscribe from './lib/CounterSubscribe.svelte'
    import Reset from './lib/Reset.svelte'
</script>

<Counter></Counter>
<Counter></Counter>
<Counter></Counter>
<hr>
<Reset></Reset>
<hr>
<CounterSubscribe></CounterSubscribe>
```

## readable
Crée un store dont la valeur ne peut pas être définie depuis "l'extérieur". Le premier argument est la valeur initiale du store, et le second argument de readable est identique au second argument de writable.

store.js
```Javascript
import { readable } from 'svelte/store';

export const time = readable(new Date(), (set) => {
	set(new Date());

	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return () => clearInterval(interval);
});

export const ticktock = readable('tick', (set, update) => {
	const interval = setInterval(() => {
		update((sound) => (sound === 'tick' ? 'tock' : 'tick'));
	}, 1000);

	return () => clearInterval(interval);
});
```
Date.svelte
```html
<script>
    import { time, ticktock } from '../stores.js'
</script>

<p>{$time}</p>
<p>{$ticktock}</p>

```
App.svelte
```html
<script>
    import Date from './lib/Date.svelte'
</script>

<Date></Date>
```

## custom store

store.js
```Javascript
import { writable } from 'svelte/store';

export const createCount = () =>{
	const { subscribe, set, update } = writable(0)

	return {
		subscribe,
		increment: () => update((n) => n + 1),
		decrement: () => update((n) => n - 1),
		reset: () => set(0)
	}
}
```

App.svelte
```html
<script>
	import { createCount } from './stores.js';
    let count = createCount()
</script>

<h1>le compteur {$count}</h1>

<button class="btn btn-primary" onclick={count.increment}>+</button>
<button class="btn btn-primary" onclick={count.decrement}>-</button>
<button class="btn btn-danger" onclick={count.reset}>reset</button>
```

## derived

store.js
```Javascript
import { readable, derived } from 'svelte/store';

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

const start = new Date();

export const elapsed = derived(time, ($time) => Math.round(($time - start) / 1000));
```

App.svelte
```html
<script>
	import { time, elapsed } from './stores.js';

	const formatter = new Intl.DateTimeFormat('fr', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<h1>La date est {formatter.format($time)}</h1>

<p>
    La page a été ouverte depuis 
	{$elapsed}
	{$elapsed === 1 ? 'seconde' : 'secondes'}
</p>
```
