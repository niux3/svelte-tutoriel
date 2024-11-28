<script>
    let characterName = $state('');

	fetch('https://swapi.dev/api/people/1')
		.then((response) => response.json())
		.then((character) => {
			characterName = character.name;
		})
</script>

<div>
    {characterName}
</div>
