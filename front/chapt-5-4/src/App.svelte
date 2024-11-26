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
