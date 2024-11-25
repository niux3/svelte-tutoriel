<script>
    export let firstname = 'Renaud'
    export let lastname
    export let email
    export let hobbies
    export let description
    export let age
    export let beOfAge

    $: fullname = `${firstname} ${lastname}`
    $: resultBeOfAge = beOfAge? "il est majeur" : "il n'est pas majeur"
</script>

<div>{fullname} - {email} ({age} ans)</div>
<p>{description.silhouette}</p>
<p>
    Ces loisirs sont :
</p>
<ul>
    <li>{@html hobbies.join('</li><li>')}</li>
</ul>
