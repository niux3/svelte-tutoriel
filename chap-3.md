# Les structures de contrôle

Nous allons aborder essentiellement 3 types de structures de contrôle au sein du HTML d'un composant SvelteJS.

- if / else if / else  qui sert à créer un système de condition.
- each est un type de boucle / loop
- await sert à récupérer les données [d'une promesse](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## la logique avec if

Dans le dernier exercice du cours précédent, j'ai évoqué le if. C'est la structure la plus simple à mettre en place. Comme dans tous les bons langages, on retrouve ce type d'instruction. SvelteJS n'échappe pas à cette règle. Voyez ce petit exemple très simple avec un select customisé.

```html
<script>
	let selected = "";
	$: mark = selected.substr(0,1).toUpperCase() + selected.substr(1)
</script>
<select bind:value={selected}>
	<option value="">choisir une marque de voiture</option>
	<option value="citroën">Citroën</option>
	<option value="peugeot">Peugeot</option>
	<option value="renault">Renault</option>
	<option value="fiat">Fiat</option>
	<option value="audi">Audi</option>
	<option value="honda">Honda</option>
	<option value="mercedes">Mercedes</option>
	<option value="nissan">Nissan</option>
	<option value="mazda">Mazda</option>
	<option value="chevrolet">Chevrolet</option>
	<option value="ford">Ford</option>
</select>

{#if selected === 'mercedes'}
<p>La <strong>{mark}</strong> est connue pour sa robustesse !</p>
{:else if selected === "fiat"}
<p>En général, les voitures <strong>{mark}</strong> sont peu onnéreuses !</p>
{:else if selected === ""}
<p>Vous n'avez rien choisi</p>
{:else}
<p>Vous avez choisi <strong>{mark}</strong>. C'est un bon choix</p>
{/if}
```

## Les itérations avec each

Comme en PHP, Python, Ruby, JS, Java, etc., il y a des boucles. En SvelteJS, vous n'avez qu'un seul type de boucle "each". La syntaxe est spécifique. Supposons que nous ayons une variable de type tableau (array) et que nous souhaitons afficher le contenu dans une liste. C'est très simple :

```html
<script>
	let colors = [
		'rouge',
		'vert',
		'bleu'
	]
</script>
<ul>
	{#each colors as color}
	<li>{color}</li>
	{/each}
</ul>
```

Dans le cas où vous auriez besoin de l'index, il vous suffira d'ajouter ce dernier à la fin. Dans certains cas, il vous sera recommandé de le faire.
```html
<script>
	let colors = [
		'rouge',
		'vert',
		'bleu'
	]
</script>
<ul>
	{#each colors as color, index}
	<li>{index + 1} : {color}</li>
	{/each}
</ul>
```

Allons un peu plus loin avec cette structure de contrôle. Vous devez énumérer une liste de personnes. Vous avez 2 options. La plus simple étant de reprendre la même manière que la précédente. C'est quelque chose de classique et logique.

```html
<script>
	let users = [
		{name: "Raphaël", "occupation": "administrateur"},
		{name: "Felipe", "occupation": "administrateur"},
		{name: "Rodolphe", "occupation": "administrateur"},
		{name: "Laurent", "occupation": "modérateur"},
		{name: "Tony", "occupation": "modérateur"},
		{name: "Renaud", "occupation": "modérateur"},
	]
</script>
<ul>
	{#each users as user, index}
	<li>{user.occupation} : {user.name}</li>
	{/each}
</ul>
```

Nous pouvons cependant utiliser ce que l'on appelle la destructuration. ça permet une écriture plus lisible :

```html
<script>
   let users = [
       {name: "Raphaël", "occupation": "administrateur"},
       {name: "Felipe", "occupation": "administrateur"},
       {name: "Rodolphe", "occupation": "administrateur"},
       {name: "Laurent", "occupation": "modérateur"},
       {name: "Tony", "occupation": "modérateur"},
       {name: "Renaud", "occupation": "modérateur"},
   ];
</script>
<ul>
   {#each users as {name, occupation}, index}
   <li>{index + 1} {occupation} : {name}</li>
   {:else}
   <li>la liste des utilisateurs est vide</li>
   {/each}
</ul>
```

Dans certains cas, vous risquez d'être coincé suite à la structure de l'objet à itérer. les méthodes [keys](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), [values](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/values) et surtout [entries](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) de class Object vont vous être très utiles :

```html
<script>
   let movies = {
       "123": {
           "name": "Autant en emporte le vent",
           "duration": 240
       },
       "456": {
           "name": "psychose",
           "duration": 120
       },
       "789": {
           "name": "Il était une fois dans l'ouest",
           "duration": 180
       }
   };
</script>
<ul>
   {#each Object.entries(movies) as [key, row], index}
   <li>{key} - {row.name}</li>
   {/each}
</ul>
```

## installer en local un environnement svelte

À ce stade, je vous recommande d'installer en local un environnement svelte. Rien de plus simple. Vous avez 2 solutions. La solution que j'utilise pour installer Svelte :

- Allez dans le [REPL](https://svelte.dev/repl/hello-world),
- Téléchargez l'application
- Dézippez dans un dossier
- Lancez un terminal et allez dans le dossier dézippé
- saisissez la commande :
```
npm i
```
- pour lancer le projet, saisissez :
```
npm run dev
```

La 2e solution :
- installez en mode général le binaire degit (pour les utilisateurs de GNU/Linux, il y a de fortes chances que vous ayez besoin de passer en admin)
```
npm i -g degit
```
- saisissez la commande suivante
```
npx degit sveltejs/template my-svelte-project
```
- allez dans le dossier my-svelte-project
- saisissez la commande :
```
npm i
```
- pour lancer le projet, saisissez :
```
npm run dev
```

Si tout va bien, votre terminal va vous proposez d'aller sur une url.

## Gérer les promesses

Nous abordons le dernier type de structure de contrôle. Celle ci est un peu spécial si vous n'êtes pas familié avec les dernières spécificités du Javascript. Il faut d'abords connaître [les promesses](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise). Bien que vous pouvez vous en créer très facilement avec l'utilisation de l'objet [XMLHttRequest](https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest), je vous recommande vivement de regarder [fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API). Vous verrez que les requêtes ajax vous serons très agréable une fois que vous aurez dompté la bête. Tout d'abords, nous avons dans le projet, ce fichier :


public/data.json
```json
[{"name": "centres de formation professionnelle", "slug": "centres-de-formation-professionnelle", "subcategory": [{"name": "commerciale", "slug": "commerciale"}, {"name": "communication", "slug": "communication"}, {"name": "comptabilit\u00e9 et juridique", "slug": "comptabilite-et-juridique"}, {"name": "construction/ BTP", "slug": "construction-btp"}, {"name": "finance et assurances", "slug": "finance-et-assurances"}, {"name": "h\u00f4tellerie/ restauration", "slug": "hotellerie-restauration"}, {"name": "informatique", "slug": "informatique"}, {"name": "management et d\u00e9veloppement personnel", "slug": "management-et-developpement-personnel"}, {"name": "multi-sp\u00e9cialistes", "slug": "multi-specialistes"}, {"name": "QSSE", "slug": "qsse"}, {"name": "ressources humaines", "slug": "ressources-humaines"}, {"name": "transformation num\u00e9rique et communication", "slug": "transformation-numerique-et-communication"}]}, {"name": "centres de formation ge\u0301ne\u0301rale", "slug": "centres-de-formation-generale", "subcategory": [{"name": "\u00c9cole de code", "slug": "ecole-de-code"}, {"name": "\u00c9coles \u00e0 distance", "slug": "ecoles-a-distance"}, {"name": "FOAD (Formations Ouvertes \u00e0 Distance)", "slug": "foad-formations-ouvertes-a-distance"}]}, {"name": "e\u0301coles de langues", "slug": "ecoles-de-langues", "subcategory": [{"name": "Formation linguistique", "slug": "formation-linguistique"}, {"name": "S\u00e9jours linguistiques", "slug": "sejours-linguistiques"}]}, {"name": "e-learning et application mobile", "slug": "e-learning-et-application-mobile", "subcategory": [{"name": "Cours de langue en application mobile/ Seriousgames", "slug": "cours-de-langue-en-application-mobile-seriousgames"}, {"name": "Cours de langue en ligne", "slug": "cours-de-langue-en-ligne"}, {"name": "Cours en application mobile/ Seriousgames - other topics", "slug": "cours-en-application-mobile-seriousgames-other-topics"}, {"name": "Formations en e-learning", "slug": "formations-en-e-learning"}, {"name": "MOOC (Massive Open Online Courses)", "slug": "mooc-massive-open-online-courses"}]}]
```

src/Navigation.svelte
```html
<script>
    export let data;
</script>

<nav>
    {#await data()}
    <p>chargement....</p>
    {:then rows}
    <ul>
        {#each rows as row}
        <li>
            <strong>{row.name}</strong>
            <ul>
                {#each row.subcategory as category}
                <li><a href="/{row.slug}/{category.slug}">{category.name}</a></li>
                {/each}
            </ul>
        </li>
    {/each}
    </ul>
    {:catch error}
        <div class="error">Error: {error.message}</div>
    {/await}
</nav>
```

App.svelte
```html
<script>
	import Navigation from './Navigation.svelte';

    let data = async ()=>{
        let response = await fetch('/data.json');
        if(response.ok){
            let data = await response.json();
            return data;
        } else {
			throw new Error("le serveur ne répond pas");
		}
    }
</script>

<Navigation {data} />
```
