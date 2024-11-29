<script>
     let { onDeleteTasksCompleted, filteredTasks, currentFilter, urls } = $props()
</script>
<footer class="mt-5 row">
    <div class="col-4">
        <span>
            <strong>{filteredTasks.length}</strong> article{#if filteredTasks.length > 1}s{/if}
        </span>
    </div>
    <div class="col-4">
        {#each Object.entries(urls) as [k, v]}
            <a href={v} class="btn btn-outline-secondary" class:active={currentFilter === v}>{k}</a>
        {/each}
    </div>
    <div class="col-4">
        <button class="btn btn-danger" onclick={onDeleteTasksCompleted}>supprimer tâches faites</button>
    </div>
</footer>
<style>
footer > .col-4:first-child{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
