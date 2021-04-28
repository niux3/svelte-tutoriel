# Ici Svelte, les composants parlent aux composants

Ce cours va vous parler de la communication entres les composants. Imaginez que vous ayez un formulaire où vous avez un champ code postal et vous devez vérifier si le code postal correspond à la ville saisie. Tout en saisissant l'adresse, une carte [openstreetmap](https://www.openstreetmap.fr/) indique l'emplacement exact. Pour ce faire, il va falloir que les composants communiquent entres eux. La communication des composants au sein d'une application se fait entre parent, enfant et même entres ancêtres et enfants.

## Quelles sont les principales manières de transmettre des données dans un composants ?

1. les props sont la manière la plus simple pour transmettre une données au composant enfant. Mais celui ci peut transmettre un résultat au parent via la directive "bind"
2. les slots permettent de transmettre du contenu au composant enfant.
3. l'évènement est une notification (avec données transmises ou pas) qui permet au composant parent d'intercepter celle ci.
4. les contextes stockent les données et les met à la disposition de toutes les instances du composant.
5. les stores stockent les données en dehors des composants et peuvent les rendre disponibles à n'importe lequel d'entre eux.
