<script>
    import { onMount } from 'svelte';
    let characterName = $state('');

    onMount(async () => {
        const response = await fetch('https://swapi.dev/api/people/1');
        const character = await response.json();
        characterName = character.name;
    })
</script>

<div>
    {characterName}
</div>
