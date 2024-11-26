<script>
    import {getContext} from 'svelte'
    const {color, number} = getContext('favoris')
</script>
<div>
    composant C.
    <div>Votre couleur favorite est {color}</div>
    <div>Votre nombre favoris est {number}</div>
</div>
