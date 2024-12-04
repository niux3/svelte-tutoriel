# Ici Svelte, les composants parlent aux composants

Ce cours va vous parler de la communication entres les composants. Imaginez que vous ayez un formulaire où vous avez un champ code postal et vous devez vérifier si le code postal correspond à la ville saisie. Tout en saisissant l'adresse, une carte [openstreetmap](https://www.openstreetmap.fr/) indique l'emplacement exact. Pour ce faire, il va falloir que les composants communiquent entres eux. La communication des composants au sein d'une application se fait entre parent, enfant et même entres ancêtres et enfants.

## Quelles sont les principales manières de transmettre des données dans un composants ?

1. les props (propriétés) sont la manière la plus simple pour transmettre une données au composant enfant. Mais celui ci peut transmettre un résultat au parent via la directive "bind"
2. les slots permettent de transmettre du contenu au composant enfant.
3. l'évènement est une notification (avec données transmises ou pas) qui permet au composant parent d'intercepter celle ci.
4. les contextes stockent les données et les met à la disposition de toutes les instances du composant.
5. les stores stockent les données en dehors des composants et peuvent les rendre disponibles à n'importe lequel d'entre eux.

### les props

Les composants peuvent accepter des entrées par le biais de props (propriétés). Leurs valeurs sont spécifiées en tant qu'attributs sur les éléments du composant. Par exemple, un composant parent peut utiliser un composant Hello comme ceci :

```html
<script>
import Hello from './Hello.svelte';
</script>

<Hello name="Renaud" />
```

Les props sont déclarés dans l'élément script d'un composant enfant avec le mot-clé **export**. La syntaxe JavaScript est de rigueur. Le mot-clé export est spécifique à Svelte.
Le mot-clé **let** doit être utilisé à la place de **const** pour déclarer des props d'un composant. Un composant parent peut modifier la valeur.

On peut donner une valeur par défaut à une props. Dans le cas où vous ne déclarer pas un props dans un composant enfant. Vous aurez un message d'erreur dans la console javascript de votre navigateur. Cependant, l'application continuera de fonctionner. Quand l'application est en ligne, vous aurez toujours ces erreurs. Mais rien ne s'affichera dans la console.  

Lorsque vous donnez une valeur "en dur" à une propriété, elle doit être dans une chaîne de caractères. Par contre, vous pouvez éditer du javascript comme valeur. Cependant, ça doit être entouré par une paire d'accolades. Vous pouvez injecter n'importe quel types d'expression JS (référence fonction/objet, number, string, variable, array, object, etc.)

Voici un petit exemple d'application :

Message.svelte
```html
<script>
	export let toggleDisplay
</script>

{#if toggleDisplay }
    <p>je m'affiche</p>
{:else}
    <p>je suis masqué</p>
{/if}
```

App.svelte
```html
<script>
	import Message from './Message.svelte'
	let display = false;
</script>

<button on:click={e => display = !display}>affiche/masque</button>
<Message toggleDisplay={display} />
```

**Attention** : Lorsqu'un composant parent transmet une nouvelle valeur de prop à un composant enfant, la valeur est mise à jour. En outre, si une opération quelconque est effectuée sur cette valeur de cette props, vous n'obtiendrez pas la valeur escomptée au final. Il vous faudra utiliser une intstruction réactive ($: ....)

### Les directives

Comme dans beaucoup de framework JS frontend il y a un type d'attributs d'un composant qui se nomme les directives. C'est un attribut un peu spécial qui permet d'améliorer l'attribut natif la plupart du temps. Avec svelte, on déclare le nom de la directive suivi ou précédé par 2 points.

1. La directive **bind** lie une valeur de prop à une variable.
2. En fonction de la valeur d'une variable, la directive **class** permet de dynamiser l'attribut class.
3.La directive **on** permet de mettre en place des écouteurs ([HTMLElement.addEventListener()](https://developer.mozilla.org/fr/docs/Web/API/EventListener))
4. La directive **use** spécifie une fonction qui sera transmise au DOM
5. **animate , transition , in, out** sont des directives pour annimer vos composants

#### La directive bind dans un formulaire

Afin de bien comprendre comment fonctionne la directive bind dans un formulaire, il est préférable de lire et de tester ce script :

```html
<script>
    let hobbies = ['cinéma', 'voyage', 'musique', 'théatre', 'restaurant', 'bar', 'couture'];
    let accept = false;
    let name = '';
    let days = [
        'lundi',
        'mardi',
        'mercredi',
        'jeudi',
        'vendredi',
        'samedi',
        'dimanche',
    ];
    let hasHobbies = ['oui', 'non'];
    let daySelected = ""
    let choiceHasHobbies = '';
    let choicesHobbies = [];
    let message = "";
    let send = false;
    let onSubmit = (e) =>{
        e.preventDefault();
		let output = "";
        if(name !== ""){
            output += `Votre nom est ${name}. `
        }

        if(days[daySelected] !== undefined){
            output += `Vous avez sélectionné le ${days[daySelected]}. `
        }

        if(choiceHasHobbies == "oui" && choicesHobbies.length){
            output += `Vos loisirs préférés sont : ${choicesHobbies.join(', ')}. `;
        }

        output += `Votre inscription est ${accept?'active':'inactive'}.`
		message = output
        send = true;
    }
    let goBack = (e)=>{
        send = false;
    }
</script>

{#if !send}
<form on:submit={onSubmit}>
    <p class="input text">
        <label for="name">Votre nom</label>
        <input type="text" id="name" bind:value={name}>
    </p>
    <p class="input select">
        <label for="days">jour de la semaine préféré</label>
        <select name="days" id="days" bind:value={daySelected}>
            <option value="">choisir un jour</option>
            {#each days as day, index}
            <option value={index}>{day}</option>
            {/each}
        </select>
    </p>
    <p>
        {#each hasHobbies as hasHobby, index}
        <span class="input radio">
            <input type="radio" id={'__'+index} value={hasHobby} bind:group={choiceHasHobbies} />
            <label for={'__'+index}>{hasHobby}</label>
        </span>
        {/each}
    </p>
    {#if choiceHasHobbies == "oui"}
    <fieldset>
        <legend>vos couleurs préférées</legend>
        {#each hobbies as hobbie, index}
        <p class="input checkbox">
            <input type="checkbox" id={'_'+index} value={hobbie} bind:group={choicesHobbies} />
            <label for={'_'+index}>{hobbie}</label>
        </p>
        {/each}
    </fieldset>
    {/if}
    <p class="input checkbox">
        <input type="checkbox" id="accept" bind:checked={accept}>
        <label for="accept">accepter inscription</label>
    </p>
    <p class="input submit">
        <button type="submit">envoyer</button>
    </p>
</form>
{:else}
<p>{message}</p>
<p><button on:click={goBack}>revenir</button></p>
{/if}
```

##### bind:this

La directive bind:this est un cas un peu spécial. Ça va définir la reférence de la variable ou des variable à l'élément enfant. Ainsi, nous pouvons manipuler le DOM parent avec ces variables.

TaxeCalculator.svelte
```html
<script>
export const taxRate = 0.25;
let price;
let prices = [];
$: total = prices.reduce((a, b) => a + b, 0);

function add() {
	prices = [...prices, price]; // insère et met à jour la variable prices !!!
	price = '';
}
export const getGrandTotal = () => total * (1 + taxRate);
</script>

<input type="number" bind:value={price} />
<button on:click={add}>Add</button>
{#each prices as price}
	<div>{price}</div>
{/each}
<hr>
<p>Total {total} avec un taux {(taxRate * 100).toFixed(2)}%</p>
```

app.svelte
```html
<script>
import TaxeCalculator from './TaxeCalculator.svelte'
let taxecalculator, taxRate = 0, grandTotal = 0;
function update() {
	taxRate = taxecalculator.taxRate;
	grandTotal = taxecalculator.getGrandTotal();
}
</script>

<TaxeCalculator bind:this={taxecalculator} />

<button on:click={update}>Update</button>
<div>
Le taux est de {(taxRate * 100).toFixed(2)}%.
Le montant total est de {grandTotal.toFixed(2)}
</div>
```

### Les slots

SvelteJS implémente une variante du système de slot des [webcomponents](https://github.com/WICG/webcomponents/blob/gh-pages/proposals/Slots-Proposal.md). Ce système permet d'injecter du contenu (composant, texte, etc.) à l'intéreur d'un composant enfant.

app.svelte
```html
<script>
import User from './User.svelte'
</script>


<User>
	<div slot="fullname">Denis Michu</div>
	<div slot="address">123, rue de quelque chose</div>
	<div slot="zipcode">12345</div>
	<div slot="city">Une ville</div>
</User>
```

User.svelte
```html
<div>
	<slot name="fullname">valeur par défaut</slot>
	<slot name="address" />
	<slot name="zipcode" /><slot name="city" />
</div>
```

### Les événements

Un composant Svelte peut utiliser n'importe quel type d'événements. À l'intérieur de la déclaration d'un événement, vous pouvez placer une référence à une méthode, mais aussi, vous pouvez directement attribuer une valeur à une variable précédemment déclarée dans le bloc \<script\>. Sachez aussi que vous pouvez cumuler le même type d'événement au sein d'un composant.

```html
<script>
let uneVar = '';
let uneAutreVar = '';
let faitQuelqueChose = (e) => uneVar = "autre valeur";
let faitAutreChose = (e) => uneAutreVar = "encore une valeur";
</script>
<UnComposant on:click={e => uneVar = "quelque chose"} />
<UnComposant on:click={faitQuelqueChose} />
<UnComposant on:click={faitQuelqueChose} on:click={faitAutreChose} />
```

#### le dispatch

Le dispatch est un système créant un événement personnalisé. Il est très utile lorsque l'on souhaite remonter l'événement à l'élément parent.

Buttons.svelte
```html
<script>
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();
	export let labels;
	export let value;
</script>

{#each labels as label}
	<button class:selected={label === value} on:click={() => dispatch('select', label)}>{label}</button>
{/each}
<style>
	.selected {
		background-color: darkgray;
		color: white;
	}
</style>
```

app.svelte
```html
<script>
	import Buttons from './Buttons.svelte';
	let civilities = ['Mademoiselle', 'Madame', 'Monsieur'];
	let civility = '';
	let handleSelect = event => civility = event.detail;
</script>
<Buttons labels={civilities} value={civility} on:select={handleSelect} />
{#if civility}
<div>vous avez choisi {civility}.</div>
{/if}
```

#### Les event:modifier

La directive on: bénéficie d'un système de filtres afin d'ajouter des comportements complémentaires à l'événement.

- **once** : permet d'utiliser une seul fois l'événement
- **self** : permet de cibler l'élément lui même
- **preventDefault** : permet par exemple de stopper le cycle de vie d'une soumission d'un formulaire
- **stopPropagation** : permet d'éviter de propager l'événement aux éléments parents

### Les contextes

Les contextes sont une alternatives aux props et aux stores. Supposons que vous ayez 3 composants (A, B, C). Le composant A affiche le composant B et le composant B affiche le composant C. À partir de A, on définit des variables de contexte et le composant C va pouvoir en bénéficier.

C.svelte
```html
<script>
    import {getContext} from 'svelte';
    const {color, number} = getContext('favorites');
</script>
<div>
    composant C.
    <div>Votre couleur favorite est {color}</div>
    <div>Votre nombre favoris est {number}</div>
</div>
```

B.svelte
```html
<script>
    import C from './C.svelte';
</script>
<div>
    composant B.
    <C />
</div>
```

A.svelte
```html
<script>
    import {setContext} from 'svelte';
    import B from './B.svelte';
    setContext('favoris', {color: 'jaune', number: 19});
</script>

<div>
    composant A.
    <B />
</div>
```

Les interactions entres composants sont une pierre angulaire d'un projet avec Svelte. Si vous n'avez pas bien compris certains concepts, relisez et surtout pratiquez ! Dans le prochain cours, nous verrons comment fonctionne le mécanisme de store. 

