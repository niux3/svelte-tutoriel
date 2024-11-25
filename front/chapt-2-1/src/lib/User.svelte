<script>
    let {
        firstname = 'Renaud',
        lastname,
        email,
        description,
        age,
        hobbies,
        beOfAge
    } = $props()
    let fullname = $derived(`${firstname} ${lastname}`)
    let resultBeOfAge = $derived(beOfAge? "il est majeur" : "il n'est pas majeur")
</script>

<div>{fullname} - {email} ({age} ans)</div>
<p>{description.silhouette}</p>
<p>
    Ces loisirs sont :
</p>
<ul>
    <li>{@html hobbies.join('</li><li>')}</li>
</ul>

<style>
ul{
    text-align: center !important;
}
:global(li){
    color: red;
}
</style>
