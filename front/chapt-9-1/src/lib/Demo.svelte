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
