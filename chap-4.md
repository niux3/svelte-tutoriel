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
