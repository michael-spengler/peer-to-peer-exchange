<script>
    const offers = [
        {
            pair: "EURToETH",
            amountInTarget: 0.1,
            latitude: 49,
            longitude: 8,
            userName: "spengler",
            telegramLink: "https://t.me/danceplanner",
        },
        {
            pair: "EURToBTC",
            amountInTarget: 0.1,
            latitude: 50,
            longitude: 8,
            userName: "powerseller",
            telegramLink: "",
        },
    ];
</script>

<table>
    <tr>
        <th>Pair</th>
        <th>Amount in Target</th>
        <th>location</th>
        <th>contact</th>
    </tr>
    {#each offers as offer}
        <tr>
            <td>{offer.pair}</td>
            <td>{offer.amountInTarget}</td>
            <td>{offer.latitude}{offer.longitude}</td>
            <a href={offer.telegramLink} target="_blank">
                <td>{offer.telegramLink}</td></a
            >
        </tr>
    {/each}
</table>

<style>
</style>
