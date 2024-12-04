<script>
    import { onMount } from 'svelte';
    let characterName = $state(undefined);

    onMount(async () => {
        const response = await fetch('https://swapi.dev/api/people/1');
        const character = await response.json();
        characterName = character.name;
    });
</script>

<div>
    {#if characterName === undefined}
        Loading Character Name...
    {:else}
        {characterName}
    {/if}
</div>
