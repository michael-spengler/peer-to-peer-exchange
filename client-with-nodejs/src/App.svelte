<script>
	 
  
	let title = "Peer 2 Peer Exchange";
	import { fade } from "svelte/transition";
	import Welcome from "./components/Welcome.svelte";
	import Offers from "./components/Offers.svelte"
	import Search from "./components/Search.svelte"

  </script>
  
  <main transition:fade>
	

	
	<Welcome {title} />
	<Offers/>
	<Search/>

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
  
