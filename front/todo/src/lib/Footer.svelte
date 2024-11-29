<script>
     let { onDeleteTasksCompleted, filteredTasks, currentFilter, urls } = $props()
</script>
<footer class="mt-5 row">
    <div class="col-3">
        <span>
            <strong>{filteredTasks.length}</strong> article{#if filteredTasks.length > 1}s{/if}
        </span>
    </div>
    <div class="col-7">
        {#each Object.entries(urls) as [k, v]}
            <a href={v} class="btn btn-outline-secondary" class:active={currentFilter === v}>{k}</a>
        {/each}
    </div>
    <div class="col-2">
        <button class="btn btn-danger" onclick={onDeleteTasksCompleted}>supprimer tâches faites</button>
    </div>
</footer>
<style>
footer > .col-3{
    display: flex;
    justify-content: center;
    align-items: center;
}
.col-7{
    display: flex;
    justify-content: center;
}
.col-7 .btn:nth-child(2){
    margin-right: 2rem;
    margin-left: 2rem;
}
.btn-danger{
    float: right;
}
</style>
