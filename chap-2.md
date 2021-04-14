# Comment créer un composant ?

Dans ce chapitre, nous allons approfondir la création des composants en créant des fichiers .svelte. Ces fichiers permettent d'implémenter en JavaScript la logique et l'état du HTML. Le css quant à lui, stylise les éléments au sein du composant.

Les composants sont composés de parties étroitement liées à l'interface utilisateur. Ils scindent une interface utilisateur potentiellement réutilisables. Certains composants représentent des pages entières, tandis que d'autres sont utilisés dans des pages. Par exemple, une page qui affiche une liste de courses peut être implémentée par un composant du nom "ShoppingList". Ce composant peut rendre chaque élément dans un autre composant plus petit. ce petit composant pourrait se nommer "item" par exemple. Les composants svelte ont une syntaxe similaire au HTML.

![schema de composants imbriqué](images/chap-2/schema-composition.png)

La logique d'un composant est définie par un ensemble de fonctions qui spécifient son comportement. Le traitement des événements inclue cette logique.

Le css peut être global et affecte tous les composants. Le plus souvent, il est "scopé", de sorte qu'il n'affecte que le composant lui même. Le CSS et les langages préprocesseurs tels que Sass peuvent être utilisés pour obtenir des fonctionnalités supplémentaires. Les instructions réactives ($:) permettent de réexécuter le code à chaque fois que la valeur d'une variable déclarée change. Souvent, ces instructions modifient l'état. Ce qui entraîne la mise à jour de certaines parties du composant.

À la fin de ce chapitre, vous serez en mesure de créer des composants qui peuvent être utilisés dans n'importe quelle application Svelte.

## Le contenu d'un fichier svelte

Les composants Svelte sont définis par le contenu d'un fichier, et non par un conteneur JavaScript dans le fichier, comme une classe, une fonction ou un objet littéral. La création d'un composant Svelte est aussi simple que de créer un fichier portant l'extension .svelte et respectant certaines règles de base. Ces fichiers doivent se trouver dans le répertoire src ou dans un sous-dossier.

Les fichiers .svelte peuvent contenir :
- au maximum un élément script context="module"
- un élément de type script
- un élément de type style
- un nombre quelconque d'éléments HTML qui peuvent apparaître dans l'élément body.

Chacun d'entre eux est facultatif et ces éléments peuvent apparaître
dans n'importe quel ordre.
