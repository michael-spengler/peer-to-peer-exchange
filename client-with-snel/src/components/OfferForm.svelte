<script>
    import {fade} from 'svelte/transition'

    let hasError = false
    let isSuccessVisible = false
    let submitted = false
    export let placeString

    const errorMessage = "All fields are mandatory";

    function handleSubmit() {
        isSuccessVisible = true;

        setTimeout(() => {
            isSuccessVisible = false;
        }, 4000);
    }
</script>

<h2>Place your offer/purchase request!</h2>


{#if isSuccessVisible}
    <p class="error-alert" transition:fade={{duration:150}}>Data updated successfully</p>
{/if}

<div class="container">

    <form id="surveyForm" class="mt-4" class:submitted on:submit|preventDefault={handleSubmit}>

        <div class="form-group2">
            <table>
                <tr>
                    <th><input type="radio" id="offer" name="offerOrPurchase" value="offer">
                        <label for="offer">offer</label><br></th>
                    <th><input type="radio" id="purchase" name="offerOrPurchase" value="purchase">
                        <label for="purchase">purchase </label><br>
                    </th>
                </tr>
            </table>
        </div>

        <div class="form-group">
            <input type="text" class="form-control" placeholder="Pair e.g. EurToETH" required>
        </div>


        <div class="form-group">
            <input type="number" class="form-control" step=".1" min="0" placeholder="Amount in target location e.g. 0.1"
                   required>
        </div>

        <div class="form-group">
            <input type="text" class="form-control" bind:value={placeString} placeholder="location"/>
        </div>

        <div class="form-group">
            <input type="text" class="form-control" placeholder="Telegram User Link" required>
        </div>

        <button class="btn btn-full" on:click={() => submitted = true}>Place your offer/request</button>
    </form>
</div>

<link href="https://gist.githubusercontent.com/Ajax30/08899d40e16069cd517b9756dc900acc/raw/04e4f9997245df079fa8500690d1878311115b20/global.css"
      rel="stylesheet" crossorigin="anonymous">

<style>

    .container {
        max-width: 1200px;
        margin: 0 auto;

    }

    table {
        max-width: 1200px;
        margin: 0 auto;
    }

    .form-group > *,
    .btn-full {
        width: 100%;
    }

    .form-control,
    .btn-full {
        border-radius: 3px;
    }

    .from-group2 {
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
