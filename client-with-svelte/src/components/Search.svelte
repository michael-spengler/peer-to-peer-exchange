<script>
    import Map from "https://raw.githubusercontent.com/HanniBal27-2001/svelte-map/d72894bb5e52feb014be6b17b4a9d1eb939a8b04/Maps.svelte";
    import { onMount } from 'svelte';

    let mapComponent
    let inputString = '';
    let markerCoords = []
    let selected;
    let optionNodes = [];
    const placeholder = "Select Your City";

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
                resetList();
                data.forEach(function(le){
                    addListEntry(le.display_name, [le.lat,le.lon]);

                })
            })
            .catch(error => alert(error))
    }

    function resetList(){
        var i;
        for(i in optionNodes){
            document.getElementById("hosting-plan").removeChild(optionNodes[i]);
        }
        selected = null;
        optionNodes = [];
        addListEntry(placeholder,placeholder);
    }

      // Break the list adding code into a function for easier re-use
    function addListEntry(display_name, coordinates) {

        // Create a new option element.
        var optionNode =  document.createElement("option");

        // Set the value
        optionNode.value = coordinates;
        optionNode.selected = false;

        // create a text node and append it to the option element
        optionNode.appendChild(document.createTextNode(display_name));

        // Add the optionNode to the datalist
        optionNodes.push(document.getElementById("hosting-plan").appendChild(optionNode));

    }

    function setselection(){
        var i;
        for(i in optionNodes){
            if(optionNodes[i].selected){
                if(optionNodes[i].value != placeholder){
                    selected = optionNodes[i].value.split(",");
                    const position = {
                        lat: selected[0],
                        long: selected[1]
                    }
                    mapComponent.setMapCenter(position)
                }
                break;
            }
        }
    }

    onMount( async()=>{
        const position = {
                        lat: 38.897957,
                        long: -77.036560
                    }
        mapComponent.setMapCenter(position)
        }
    )
</script>

<p>Where do you want to exchange crypto?</p>
<br/>
<Map bind:this={mapComponent} button={true}/>
<p>
    <input on:change={setMapCoordinates} bind:value={inputString} type="text" list="hosting-plan" placeholder="...start typing"/>
    <!-- <button on:click={setMapCoordinates}>Finden</button> -->
    <select id="hosting-plan" on:change={setselection}/>
    
</p>

{#if inputString !== ''}
    O.K. I'm looking for Crypto Exchange Options in {inputString}.
{/if}

<style>
</style>
