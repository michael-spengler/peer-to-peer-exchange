<script>
    import Map from "./Map.svelte";

    let mapComponent
    let inputString = '';

    function setMapCoordinates() {
        if (inputString === '') {
            alert('Ort eingeben')
            return
        }

        const url =
            'https://nominatim.openstreetmap.org/search?q="' +
            inputString +
            '"&format=json'

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const firstResult = data[0]
                if (firstResult) {
                    mapComponent.setMapCenter([firstResult.lat, firstResult.lon])
                } else {
                    throw new Error("Ort konnte nicht gefunden werden")
                }
            })
            .catch(error => alert(error))
    }
</script>

<p>Where do you want to exchange crypto?</p>
<br/>
<Map bind:this={mapComponent} button={true}/>
<p>
    <input bind:value={inputString} placeholder="...start typing"/>
    <button on:click={setMapCoordinates}>Finden</button>
</p>

{#if inputString !== ''}
    O.K. I'm looking for Crypto Exchange Options in {inputString}.
{/if}

<style>
</style>
