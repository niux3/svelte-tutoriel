<script>
    let rayon = $state(5)
    let height = $state(20)
    let diameter = $derived(rayon * 2)
    let area = $derived(Math.PI * diameter)
    let volume = $derived(area * height)

    let posX1 = $derived(250 - (diameter * Math.PI))
    let posX2 = $derived(250 + (diameter * Math.PI))
</script>

<div class="global">
    <div class="data">
        <div>
            <div class="input text">
                <label>
                    <strong>rayon</strong><input type="range" min="5" max="35" bind:value={rayon} />
                </label>
            </div>
            <div class="input text">
                <label>
                    <strong>height</strong><input type="range" min="20" max="300" bind:value={height} />
                </label>
            </div>
        </div>
        <div class="result">
            <dl>
                <dt>rayon : </dt>
                <dd>{rayon}</dd>
                <dt>diametre : </dt>
                <dd>{diameter}</dd>
                <dt>aire : </dt>
                <dd>{area.toFixed(2)}</dd>
                <dt>volume : </dt>
                <dd>{volume.toFixed(2)}</dd>
            </dl>
        </div>
    </div>
    <svg height="500" width="500" viewBox="0 0 500 500">
      <ellipse cx="250" cy={height + 80} rx={area} ry="10" />
      <rect x={posX1} y="80" width={area * 2} height={height} />
      <line x1={posX1} y1="80" x2={posX1} y2={height + 80} />
      <line x1={posX2} y1="80" x2={posX2} y2={height + 80} />
      <ellipse cx="250" cy="80" rx={area} ry="10" />
    </svg>
</div>

<style>
.global{
        width: 75%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 250px 1fr;
        grid-column-gap: 25px;
    }

    .global .input{
        text-align: center;
        padding: 25px;
        border: 1px solid #ddd;
        border-radius: 12px;
        margin-bottom: 15px;
    }

    .global .input strong{
        display: block;
    }

    dt{
        float: left;
        margin-right: 15px;
        font-weight: bold;
    }

    ellipse{
        fill:white;
        stroke:orangered;
        stroke-width:2
    }

    line{
        stroke:orangered;
        stroke-width:2
    }

    rect{
        fill:white;
    }
</style>
