<script>
    import Map from "https://deno.land/x/svelte_map/Maps.svelte";

    export let location;
</script>

<p>Where do you want to exchange crypto?</p>
<br />
<Map long="8.46694" lat="49.4891" button={true} />
<p>
    <input bind:value={location} placeholder="...start typing" />
</p>

{#if location !== undefined}
    O.K. I'm looking for Crypto Exchange Options in {location}.
{/if}

<style>
</style>
