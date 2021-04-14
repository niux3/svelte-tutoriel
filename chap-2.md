# Comment créer un composant ?

Dans ce chapitre, nous allons approfondir la création des composants en créant des fichiers .svelte. Ces fichiers permettent d'implémenter en JavaScript la logique et l'état du HTML. Le css quant à lui, stylise les éléments au sein du composant.

Les composants sont composés de parties étroitement liées à l'interface utilisateur. Ils scindent une interface utilisateur potentiellement réutilisables. Certains composants représentent des pages entières, tandis que d'autres sont utilisés dans des pages. Par exemple, une page qui affiche une liste de courses peut être implémentée par un composant du nom "ShoppingList". Ce composant peut rendre chaque élément dans un autre composant plus petit. ce petit composant pourrait se nommer "item" par exemple. Les composants svelte ont une syntaxe similaire au HTML.

![schema de composants imbriqué](images/chap-2/schema-composition.png)

La logique d'un composant est définie par un ensemble de fonctions qui spécifient son comportement. Le traitement des événements inclue cette logique.

Le css peut être global et affecte tous les composants. Le plus souvent, il est "scopé", de sorte qu'il n'affecte que le composant lui même. Le CSS et les langages préprocesseurs tels que Sass peuvent être utilisés pour obtenir des fonctionnalités supplémentaires. Les instructions réactives ($:) permettent de réexécuter le code à chaque fois que la valeur d'une variable déclarée change. Souvent, ces instructions modifient l'état. Ce qui entraîne la mise à jour de certaines parties du composant.

À la fin de ce chapitre, vous serez en mesure de créer des composants qui peuvent être utilisés dans n'importe quelle application Svelte.

## Le contenu d'un fichier svelte

Les composants Svelte sont définis par le contenu d'un fichier, et non par un conteneur JavaScript dans le fichier, comme une classe, une fonction ou un objet littéral. La création d'un composant Svelte est aussi simple que de créer un fichier portant l'extension .svelte et respectant certaines règles de base. Ces fichiers doivent se trouver dans le répertoire src ou dans un sous-dossier de celui-ci.

Les fichiers .svelte peuvent contenir :

- au maximum un élément script context="module"
- un élément de type script
- un élément de type style
- un nombre quelconque d'éléments HTML qui peuvent apparaître dans l'élément body.

Chacun d'entre eux est facultatif et ces éléments peuvent apparaître
dans n'importe quel ordre.

La structure classique d'un fichier svelte est ainsi :

```html
<script>
// code javascript du composant.
</script>

<!-- le html du composant  -->

<style>
 /*
 le css spécifique à ce composant
 */
</style>

```

## Le composant au microscope

Vous avez remarqué au cours précédent que la syntaxe pour rendre le composant est très proche du HTML, n'est ce pas ? Un composant svelte utilise quasiment la même syntaxe.

```html
<NomDuComposant unePropriete="une valeur" />
```
ou
```
<NomDuComposant unePropriete="une valeur"></NomDuComposant>
```

Les props (propriétés) d'un composant permettent de transmettre :

- des chaines de caractères
- des objets
- des nombres
- des composants
- etc.

Ainsi, le composant récupère via ces props toutes les données dont il a besoin pour fonctionner.

Voici un exemple plus concret du passage de valeur à un composant svelte :

```html
<User
    firstname="Jean"
    lastname="Martin"
    email="jmartin@gmail.com"
    hobbies={ [ "le cinéma", "écouter de la musique", "la photo", "l'informatique" ] }
    description={{ "silhouette": "mince", "date anniversaire": "01/01/1970", "poids": 80 }}
    age={calculateBirth(user)}
    beOfAge={true}   
/>
```

> REMARQUE: lorsque une valeur n'est pas définie ou qu'elle est null, elle ne sera pas ajouter dans le DOM. Par exemple, au sein du composant il y a ce tag <img alt={description} src={imageUrl}>. Si la variable description est nulle ou indéfinie, l'élément img n'aura pas d'attribut alt.


- Aller dans le REPL
- ajouter un onglet.
- Nommer cette onglet : "User.svelte"
- Saisissez le code ci-dessous :

```html
<script>
	export let firstname;
	export let lastname;
	export let email;
	export let hobbies;
	export let description;
	export let age;
	export let beOfAge;

	$: fullName = `${firstname} ${lastname}`;
	$: resultBeOfAge = beOfAge? "il est majeur" : "il n'est pas majeur";
</script>

<div>
{fullName} a {age} ans et {resultBeOfAge}.
</div>
<p>
	Ces loisirs sont :
</p>
<ul>
	<li>{@html hobbies.join('</li><li>')}</li>
</ul>
```

- Aller dans l'onglet App.svelte
- Efface tout son contenu
- Saisissez le code ci-dessous :

```html
<script>
	import User from './User.svelte';
    let description = {
        "silhouette": "mince",
        "date anniversaire": 'July 20, 1970 00:20:18',
        "poids": 80
    }
    let beOfAge = calculateBirth() > 18? true : false;
	let calculateBirth = () =>{
        let now = new Date().getFullYear()
        let userBirthDay = new Date(description["date anniversaire"]).getFullYear();
		return  now - userBirthDay
	}
    let hobbies = [ "le cinéma", "écouter de la musique", "la photo", "l'informatique" ]
</script>

<User
    firstname="Jean"
    lastname="Martin"
    email="jmartin@gmail.com"
    hobbies={hobbies}
    description={description}
    age={calculateBirth()}
    beOfAge={beOfAge}
/>
```

> REMAQUE: Vous avez peut être remqué un @html à l'intérieur des accolades ? En effet, si vous l'omettez, le html au sein de l'expression JavaScript entre les accolades ne sera pas interprété.

Parfois certains composants récupèrent tellement de props que votre fichier va devenir illisible. Vous pouvez raccourcir aisément cette écriture.

Si le nom de la props et le même nom de la variable à passer dans le composant, vous pouvez écrire comme ceci :

de ceci :
```
<User firstname={firstname} />
```
à cela :
```
<User {firstname} />
```
Nous pouvons aller encore plus loin pour raccourcir l'écriture. En reprenant l'exemple précédent et en utilisant le spread operator !

```html
<script>
	import User from './User.svelte';
	let description = {
        "silhouette": "mince",
        "date anniversaire": 'July 20, 1971 00:20:18',
        "poids": 80
    }
    let calculateBirth = () =>{
        let now = new Date().getFullYear()
        let userBirthDay = new Date(description["date anniversaire"]).getFullYear();
		return  now - userBirthDay
	}
    let beOfAge = calculateBirth() > 18? true : false;

    let data = {
        description, // raccourci es6 !
        age : calculateBirth(),
        beOfAge, // raccourci es6 !
        firstname : "Jean",
        lastname : "Martin",
        email : "jmartin@gmail.com",
        hobbies : [ "le cinéma", "écouter de la musique", "la photo", "l'informatique" ]        
    }

</script>

<User {...data} />
```

### le nom du composant et son appel

Vous pouvez le nommez comme vous voulez. Par convention, il est préférable d'utiliser le Camel case avec une majuscule sur la première lettre. Aussi, éviter les fantaisies de nommer le composant d'une manière différente de son import. Vous risquez de vous perdre en route ! En d'autres termes, le nom du composant doit refléter le nom du fichier.

```javascript
import UnComposant from "./quelque-chose.svelte"
```
