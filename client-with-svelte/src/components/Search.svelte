<script>
    <!-- TODO: import map from svelte-map base project if PR is merged, or from deno if improved version is published -->
    import Map
        from "https://raw.githubusercontent.com/HanniBal27-2001/svelte-map/d72894bb5e52feb014be6b17b4a9d1eb939a8b04/Maps.svelte";
    import {onMount} from 'svelte';

    let mapComponent
    let inputString = '';
    let markerCoords = []
    let selectedPlace;
    let places = [];
    const placeholder = "Select Your City";

    function getCitys() {
        selectedPlace = placeholder

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
                resetPlaceList();
                if (data.length > 0) {
                    data.forEach((result) => {
                        addListEntry(result.display_name, {lat: result.lat, long: result.lon});
                    })
                } else {
                    throw Error("Kein Ort für Eingabe gefunden")
                }
            })
            .catch(error => alert(error))
    }

    function resetPlaceList() {
        places = [];
    }

    // Break the list adding code into a function for easier re-use
    function addListEntry(placeName, placeCoordinates) {
        let optionNode = {
            name: placeName,
            coordinates: placeCoordinates,
        }
        places.push(optionNode)
    }

    function setSelectedPlace() {
        mapComponent.setMapCenter(selectedPlace.coordinates)
    }

    onMount(async () => {
            const position = {
                lat: 38.897957,
                long: -77.036560
            }
            mapComponent.setMapCenter(position)
        }
    )

// .--------  added for form -------------------------------------
import {fly, fade } from 'svelte/transition';
	//import Search from "Search.svelte";
	//import {location} from 'Search.svelte';
	//import location from "Search.svelte";
	let hasError = false;
	let isSuccessVisible = false;
	let submitted = false;

	//let newlocation = location;

	const errMessage = "All the fields are mandatory";

	function handleSubmit(e) {
		isSuccessVisible = true;

		setTimeout(function(){
			isSuccessVisible = false;
		}, 4000);
	}
// ----------------------------------------------------------------
</script>

<p>Where do you want to exchange crypto?</p>
<br/>
<Map bind:this={mapComponent} button={true}/>
<p>
    <input on:change={getCitys} bind:value={inputString}
           placeholder="...start typing"/>

    {#if places.length !== 0}
        <select bind:value={selectedPlace} on:change={setSelectedPlace}>
            <option>{placeholder}</option>
            {#each places as place}
                <option value={place}>
                    {place.name}
                </option>
            {/each}
        </select>
    {/if}

</p>

{#if inputString !== ''}
    O.K. I'm looking for Crypto Exchange Options in {inputString}.
{/if}

<h2>Place your offer/purchase request!</h2>

{#if hasError == true}
		<p class="error-alert">{errMessage}</p>
{:else}
	{#if isSuccessVisible}
		<p class="error-alert" transition:fade={{duration:150}}>Data updated successfully</p>
	{/if}
{/if}


<!------	<added for form ---------------------------------------------------------------------------->

<div class="container">

	<form id="surveyForm" class="mt-4" class:submitted on:submit|preventDefault={handleSubmit}>

        <div class="form-group2">
            <table>
                <tr>
                  <th> <input type="radio" id="offer" name="fav_language" value="offer">
                    <label for="offer">offer</label><br></th>
                  <th> <input type="radio" id="purchase" name="fav_language" value="purchase">
                    <label for="purchase">purchase </label><br>
                </th>
                </tr>
            </table>
        </div>

        <div class="form-group">
			<input type="text" class="form-control" placeholder="Pair e.g. EurToETH" required>
		</div>


		<div class="form-group">
			<input type="number" class="form-control" step=".1" min="0" placeholder="Amount in target location e.g. 0.1" required>
		</div>

		<div class="form-group">
			<input type="text" class="form-control" bind:value={inputString} placeholder="location"  />

		<!--	<input type="text" class="form-control" placeholder="Location" required>  -->
		</div>

		<div class="form-group">
			<input type="text" class="form-control" placeholder="Telegram User Link" required>
		</div>

		<button class="btn btn-full" on:click={() => submitted = true}>Place your offer/request</button>
	</form>
</div>

<link href="https://gist.githubusercontent.com/Ajax30/08899d40e16069cd517b9756dc900acc/raw/04e4f9997245df079fa8500690d1878311115b20/global.css" rel="stylesheet" crossorigin="anonymous">


<style>

.container {
		max-width: 1200px;
		margin: 0 auto;

	}
    table{
        max-width: 1200px;
        margin: 0 auto;
    }

	h2 {
		margin-top: 0;
	}

	.form-group > *,
	.btn-full {
		width: 100%;
	}

	.form-control,
	.btn-full {
		border-radius: 3px;
	}

    .from-group2
    {
        float: left;
    }




	.submitted input:invalid {
		border: 1px solid #c00;
	}

	.submitted input:focus:invalid {
		outline: 1px solid #c00;
	}

	.error-alert {
		border: 1px solid #c00 !important;
		padding: 6px;
		text-align: center;
		color: #c00;
		border-radius: 3px;
	}

</style>
