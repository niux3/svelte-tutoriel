<script>
    let {onDeleteTask, filteredTasks} = $props()
</script>
<div class="my-5">
    <ul class="list-unstyled">
        {#each filteredTasks as task}
        <li class="row">
            <div class="col-3">
                <label class="form-check">
                    <input class="form-check-input" type="checkbox" bind:checked={task.completed}>
                </label>
            </div>
            <div class="col-9">
                <span class:strike={task.completed}>{task.name}</span>
                <button type="button" class="btn-close" aria-label="Close" data-id={task.id} onclick={onDeleteTask}></button>
            </div>
        </li>
        {/each}
    </ul>
</div>

<style>
.col-3{
    justify-content: center;
    align-items: center;
    display: flex;
}
.col-9{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.btn-close{
    display: none;
}
li:hover .btn-close{
    display: inherit;
}
.strike{
    text-decoration: line-through;
}
</style>
