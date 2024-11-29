<script>
    import Header from './lib/Header.svelte'
    import Content from './lib/Content.svelte'
    import Footer from './lib/Footer.svelte'
    
    let urls = {
        'Tous': '#/tous',
        'Actifs': '#/actifs',
        'Faits': '#/faits',
    }
    let hashDefault = Object.values(urls).shift()
    let currentFilter = $state(hashDefault)
    let tasks = $state([
        {
            id: new Date().getTime(),
            name: "chercher du pain",
            completed: false
        },
        {
            id: new Date().getTime() + 1,
            name: "apprendre le JS",
            completed: true
        }
    ])

    let filteredTasks = $derived( currentFilter === "#/tous" ? tasks : currentFilter === "#/faits" ? tasks.filter(t => t.completed) : tasks.filter(t => !t.completed))

    const onAdd = e => {
        e.preventDefault()
        tasks = [...tasks, {
            id: new Date().getTime(),
            completed: false,
            name: e.target.querySelector('input[type=text]').value
        }]
        e.target.reset()
    }
    const onAllChecked = e =>{
        tasks = tasks.map(t =>{
            let newT = {...t}
            newT.completed = e.target.checked
            return newT
        })
    }
    const onDeleteTask = e =>{
        tasks.splice(tasks.findIndex(t => t.id === parseInt(e.target.dataset.id, 10)), 1)
    }
    const onDeleteTasksCompleted = e =>{
        tasks = tasks.filter(t => !t.completed)
    }
    const onHashChange = e => currentFilter = window.location.hash
    const onLoadApp = e => {
        if(window.location.hash === '') {
            window.location.hash = hashDefault
        }else{
            currentFilter = window.location.hash
        }
    }
</script>

<svelte:window onhashchange={onHashChange} onload={onLoadApp} />
<Header {tasks} {onAdd} {onAllChecked} />
{#if tasks.length}
    <Content {onDeleteTask} {filteredTasks} />
    <Footer {filteredTasks} {onDeleteTasksCompleted} {currentFilter} {urls} />
{/if}
