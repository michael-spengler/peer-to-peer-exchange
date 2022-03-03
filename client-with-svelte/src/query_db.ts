import client from "./db_connection.js"


export async function query_buyers() {
    return await client.query("select * from buyers");
}

export async function add_trader(pair:string, amount:number, location:string,
                    contact:string, kindOfOffer:string) {
    // TODO: Confirm the value of "kindOfOffer"
    if (kindOfOffer == 'buyer') {
        return await client.execute("INSERT INTO buyers(pair, amount, location, contact) values(?, ?, ?, ?)", [
            pair,
            amount,
            location,
            contact
        ]);
    }
    else if (kindOfOffer == 'seller') {
        return await client.execute("INSERT INTO sellers(pair, amount, location, contact) values(?, ?, ?, ?)", [
            pair,
            amount,
            location,
            contact
        ]);
    } else {
        console.log("No typeOfOffer specified!");
        return 1;
    }
}
    

// export const buyers = await client.query("select * from buyers");
// export const buyers = await query_buyers();
