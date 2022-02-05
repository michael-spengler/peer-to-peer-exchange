<script>
  export let title;
  export let location;
</script>

<h1>{title}</h1>

<p>
  Here you can buy and sell crypto currencies by finding the right people for
  the deal in your neigbourhood.
</p>

<p>Where do you want to exchange crypto?</p>
<br />
<p>
  <input bind:value={location} placeholder="...start typing" />
</p>

{#if location !== undefined}
  O.K. I'm looking for Crypto Exchange Options in {location}.
{/if}

<link
  href="https://fonts.googleapis.com/css?family=Overpass:100,400"
  rel="stylesheet"
/>

<style>
  h1 {
    color: blue;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
