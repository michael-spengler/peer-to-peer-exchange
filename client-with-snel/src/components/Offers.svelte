<script>

	let columns = ["Pair", "Amount in Target", "Location", "Username", "Contact", "Offer/Purchase"]
	let data = [
    ["EURToETH", "0.1", "49_8", "spengler", "https://t.me/danceplanner", "Offer"]
  ]
	let newRow = [...columns];
	
	function addRow() {
		data = [...data, [...newRow]]
        newRow = columns
	}

	
	function deleteRow(rowToBeDeleted) {
		data = data.filter(row => row != rowToBeDeleted)
	}
</script>

<table>
	<tr>
		{#each columns as column}
			<th>{column}</th>
		{/each}
	</tr>
	
	{#each data as row}
		<tr>
			{#each row as cell}
			<td contenteditable="true" bind:innerHTML={cell} />
			{/each}
			<button on:click={() => deleteRow(row)}>
				X
			</button>
		</tr>
	{/each}
	
	<tr class="new" >
		{#each newRow as column}
			<td  contenteditable="true" bind:innerHTML={column} />
		{/each}
		<button on:click={addRow} >
	        add
        </button>
	</tr>
</table>

<style>
	table {
		margin-left:auto;
		margin-right: auto;
		width:auto;
		border:3px solid;
        border-collapse: separate;
		border-style: solid;
		
		width:auto
    }
	th {
	    border:3px solid;
        border-top-color: aqua;
		border-style: groove;
		width:auto;
		background-color: rgb(112, 119, 182);
		
	}
	td{
		position: center;
        border:3px solid;
        
	}

	.new {
		color: grey;
	}
	.new td:focus {
		color: black;
	}

    [contenteditable] {
        margin-left:auto;
		margin-right: auto;
		width:200px
		
      }
</style>