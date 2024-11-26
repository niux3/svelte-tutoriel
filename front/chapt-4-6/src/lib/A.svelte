<script>
    import {setContext} from 'svelte';
    import B from './B.svelte';
    setContext('favoris', {color: 'jaune', number: 19});
</script>

<div>
    composant A.
    <B />
</div>
