<script>
    import Map from "./Maps.svelte";

    export let location;
</script>

<p>Where do you want to exchange crypto?</p>
<br />
<Map/>
<p>
    <input bind:value={location} placeholder="...start typing" />
</p>

{#if location !== undefined}
    O.K. I'm looking for Crypto Exchange Options in {location}.
{/if}

<style>
</style>
