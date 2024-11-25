<script>
    /*import OldUser from './lib/OldUser.svelte'*/
    import User from './lib/User.svelte'
    let description = {
        "silhouette": "mince",
        "date anniversaire": 'July 20, 1970 00:20:18',
        "poids": 80
    }
    let calculateBirth = () =>{
        let now = new Date().getFullYear()
        let userBirthDay = new Date(description["date anniversaire"]).getFullYear();
        return  now - userBirthDay
    }
    let beOfAge = calculateBirth() > 18? true : false;
    let hobbies = [ "le cinéma", "écouter de la musique", "la photo", "l'informatique" ]
    let data = {
        firstname: "Denis",
        lastname: "Martin",
        email: "jmartin@gmail.com",
        description,
        age: calculateBirth(),
        hobbies,
        beOfAge
    }
</script>

<!--
<User
    lastname="Martin"
    email="jmartin@gmail.com"
    hobbies={hobbies}
    description={description}
    age={calculateBirth()}
    beOfAge={beOfAge}
    />
-->
<User {...data} />
<ul>
    <li>item</li>
</ul>

<style></style>
