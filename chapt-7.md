# lifecycle

Dans certaines applications, il y a des actions qui doivent être exécutées lorsqu’un composant est ajouté ou retiré du DOM. Il existe également des situations où des actions doivent être effectuées avant ou après la mise à jour d’un composant. Svelte prend en charge cela en permettant l’enregistrement de fonctions qui seront appelées lorsque quatre événements spécifiques surviennent dans le cycle de vie d’une instance de composant :

- Lorsqu’il est monté (ajouté au DOM)
- Avant qu’il ne soit mis à jour
- Après qu’il ait été mis à jour
- Lorsqu’il est détruit (retiré du DOM)

Un composant est "mis à jour" si l’une de ses props change ou si l’une de ses variables d’état change. Rappelons que les variables d’état sont des variables de niveau supérieur dans un composant, utilisées dans son HTML. **Attention**, Si vous utilisez le système de runes, beforeUpdate et afterUpdate ne seront plus utilisables. Il faudra utiliser la rune $effect et $effect.pre

Demo.svelte
```html
<script>
    import {onDestroy, onMount} from 'svelte'
    
    let color = $state('red');
    function toggleColor() {
        color = color === 'red' ? 'blue' : 'red';
    }
    onMount(() => console.log('mounted', color));
    // beforeUpdate(() => console.log('before update'));
    // afterUpdate(() => console.log('after update'));
    $effect.pre(()=>{
        console.log('before update', color)
    })
    $effect(()=>{
        console.log('after update', color)
    })
    onDestroy(() => console.log('destroyed', color));
</script>

<button class="btn" onclick={toggleColor} style:color={color}>Demo</button>
```

App.svelte
```html
<script>
    import Demo from './Demo.svelte';
    
    let show = $state(false);
</script>

<label>
    <input type="checkbox" bind:checked={show}>
    Show
</label>
{#if show}
    <Demo />
{/if}
```
