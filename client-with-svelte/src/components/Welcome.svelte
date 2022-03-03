<script>
  export let title;

  let user = 'daniel';
  let password = 'password123';

  async function postToDB() {
    const res = await fetch('http://127.0.0.1:3000/addUser', {
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      // body: JSON.stringify({"abc": {location}})
      // TODO: Replace hardcoded strings with variables
      body: JSON.stringify({"pair": "EURtoETF",
                            "amount": 1.5,
                            "location": "Frankfurt",
                            "contact": "testUser",
                            "kindOfOffer": "seller"})

    })
  }
</script>

<h1>{title}</h1>

<p>
  Here you can buy and sell crypto currencies by finding the right people for
  the deal in your neigbourhood. 
</p>

<button on:click="{postToDB}">Send it.</button>

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
