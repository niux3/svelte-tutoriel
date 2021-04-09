# Votre première application Svelte

Sans avoir à télécharger ou à installer quoi que ce soit, vous aller apprendre tout ce que vous devez savoir sur Svelte. Vous allez utiliser l'application <abbr title="Read, Evaluate, Print, Loop">REPL</abbr> sur le web. Un <abbr title="Read, Evaluate, Print, Loop">REPL</abbr> lit le code que vous saisissez, l'évalue, le met à jour et l'affiche. Il existe des <abbr title="Read, Evaluate, Print, Loop">REPL</abbr> pour de nombreux langages de programmation et de frameworks web. Le <abbr title="Read, Evaluate, Print, Loop">REPL</abbr> est une passerelle parfaite pour développer des petites applications. Pour de plus grandes applications, votre éditeur de texte ou IDE sera plus adapté à la situation.

Ce chapitre explique comment télécharger des applications <abbr title="Read, Evaluate, Print, Loop">REPL</abbr> pour un petit développement.  À la fin du chapitre, vous serez prêt à commencer à développer vos propres applications Svelte.

## le Repl de Svelte

[Svelte.dev](https://svelte.dev) fournit un <abbr title="Read, Evaluate, Print, Loop">REPL</abbr>. Il permet de définir des composants Svelte et de voir leur rendu. L'utilisation de ce <abbr title="Read, Evaluate, Print, Loop">REPL</abbr> est le moyen le plus facile d'expérimenter Svelte.

Pour commencer, allez sur le site Web principal de [Svelte.dev](https://svelte.dev). Puis cliquez sur le lien <abbr title="Read, Evaluate, Print, Loop">REPL</abbr>. Vous devriez constater qu'il y a d'ores et déjà une petite application qui se nome "Hello World".

### L'utilisation du <abbr title="Read, Evaluate, Print, Loop">REPL</abbr> de svelte

Le seul fichier fourni dans le <abbr title="Read, Evaluate, Print, Loop">REPL</abbr> est App.svelte. Ce fichier peut en importer d'autres. Ils sont définis dans des onglets supplémentaires au sein du <abbr title="Read, Evaluate, Print, Loop">REPL</abbr>.

Pour ajouter d'autres fichiers .svelte ou .js, cliquez sur le bouton plus (+) à droite des onglets. Donnez au fichier, un nom. Par défaut, les fichiers nouvellement créés ont une extension *.svelte. Pour signifier que vous utiliserez un ficheir *.js, renommer complètement l'onglet.

> note : En général, lorsque vous constatez l'erreur "Failed to construct 'URL' : Invalid base URL", cela signifie que le nom de l'onglet (donc le nom du fichier) ne comporte pas d'extension. De ce fait, il vous sera impossible d'importer ce dernier.

Pour supprimer un fichier :
- cliquez sur son onglet
- cliquez sur le "X" qui apparaît à droite du nom de fichier.

Le <abbr title="Read, Evaluate, Print, Loop">REPL</abbr> contient trois onglets à droite :
- result : L'onglet result affiche la sortie rendue de App.svelte. Lorsque cet onglet est sélectionné, le coin inférieur droit du <abbr title="Read, Evaluate, Print, Loop">REPL</abbr> affiche le résultat de l'application.
- JS output : Cet onglet affiche le code compilé en Javascript
- CSS output : Cet onglet le CSS minifié et généré par l'application.

La barre supérieure du <abbr title="Read, Evaluate, Print, Loop">REPL</abbr> contient des liens vers de nombreuses ressources Svelte (tutoriel, la documentation de l'API, des exemples, le blog Svelte, la FAQ Svelte, la page d'accueil de Sapper, etc.).

![barre supérieure](images/top-bar-svelte.png)

### Votre première application Svelte
