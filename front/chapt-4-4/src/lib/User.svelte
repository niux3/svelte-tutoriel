<p>{JSON.stringify($$slots)}</p>
<div>
    <slot name="fullname">valeur par défaut</slot>
    {#if $$slots.address}
    <slot name="address" />
    {/if}
    <slot name="zipcode" /><slot name="city" />
</div>
