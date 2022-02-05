<script>
  import Welcome from "@/components/Welcome.svelte";
  import Search from "@/components/Search.svelte";
  import Offers from "@/components/Offers.svelte";
  import { fade } from "svelte/transition";

  let title = "Peer 2 Peer Exchange";
</script>

<main transition:fade>
  <Welcome {title} />
  <Offers />
  <Search />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
