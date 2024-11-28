<script>
    import Nav from './lib/Nav.svelte'
    import * as Slides from './lib/slides'


    let calls = [...Array(4).keys()]
    let indexSlide = $state(0)
    let slides = Object.values(Slides)

    const onSlide = e => indexSlide = e.target.dataset.slide
    let propsToNav = {
        calls,
        onSlide
    }
</script>

<Nav {...propsToNav} />
<div class="mt-5 mb-5">
    <svelte:component this={slides[indexSlide]} />
</div>
