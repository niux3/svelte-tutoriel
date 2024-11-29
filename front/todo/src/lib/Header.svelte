<script>
    let {tasks, onAdd, onAllChecked} = $props()
</script>

<header>
    <h1 class="text-center">Todo MVC</h1>
    <form onsubmit={onAdd} class="my-5">
        <fieldset class="border py-4 pe-4">
            <legend>
                <span>Ajouter une tâche</span>
            </legend>
            <div class="row">
                {#if tasks.length}
                    <div class="col-3">
                        <label class="form-check">
                            <input class="form-check-input" type="checkbox" onchange={onAllChecked}>
                        </label>
                    </div>
                {/if}
                <div class:col-9={tasks.length} class:col-12={tasks.length === 0}>
                    <input type="text" class="form-control" placeholder="ce qui doit être fait">
                </div>
            </div>
        </fieldset>
    </form>
</header>

<style>
.col-3{
    justify-content: center;
    align-items: center;
    display: flex;
}
::placeholder{
    font-style: italic;
    color: #999;
}
fieldset{
    position: relative;
}
legend{
    position: absolute;
    top: -20px;
    display: inline-block;
    left: 1rem;
}
legend span{
    background: #fff;
}
</style>
