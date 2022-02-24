<script>
    import Map from "https://raw.githubusercontent.com/HanniBal27-2001/svelte-map/d72894bb5e52feb014be6b17b4a9d1eb939a8b04/Maps.svelte";

    let mapComponent
    let inputString = '';
    let markerCoords = []

    function setMapCoordinates() {
        mapComponent.setMapCenter({lat: 30, long: -97})
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
                    const position = {
                        lat: firstResult.lat,
                        long: firstResult.lon
                    }
                    mapComponent.setMapCenter(position)

                    markerCoords.push(position)
                    mapComponent.showMarkersForCoords(markerCoords)
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
