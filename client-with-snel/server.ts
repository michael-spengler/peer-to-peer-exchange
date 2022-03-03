import { opine, serveStatic, json } from "https://deno.land/x/opine@2.1.2/mod.ts";
import { opineCors } from "https://deno.land/x/cors/mod.ts";
import { query_buyers } from "./src/query_db.ts"
import { add_trader } from "./src/query_db.ts"

const app = opine();
const pathToAssets = `${Deno.cwd()}/public`
const pathToIndexHTML = `${pathToAssets}/index.html`

app.use(serveStatic(pathToAssets))
app.use(opineCors())

app.use(json()); // for parsing application/json

app.get("/", function (req, res) {
    res.sendFile(pathToIndexHTML);
});

app.post("/addUser", function (req, res) {
    // console.log(req.body);
    // console.log(req.body.pair);
    // console.log(req.body.amount);

    let pair = req.body.pair;
    let amount = req.body.amount;
    let location = req.body.location;
    let contact = req.body.contact;
    let kindOfOffer = req.body.kindOfOffer;

    // Verify that values are provided
    /*
    if (
          (req.parsedBody.hasOwnProperty("user") == false) ||
          (req.parsedBody.hasOwnProperty("amount") == false) ||
          (req.parsedBody.hasOwnProperty("location") == false) ||
          (req.parsedBody.hasOwnProperty("contact") == false) ||
          (req.parsedBody.hasOwnProperty("kindOfOffer") == false)
    ) {
      res.setStatus(400);
      res.send("Missing Parameter");

    }
    */
    // console.log(buyers);

    

    add_trader(pair, amount, location, contact, kindOfOffer);

    console.log(query_buyers());

    res.setStatus(200);
    res.send("OK");

})


const port = 3000

app.listen(
    port,
    () => console.log(`server has started on http://localhost:${port} 🚀`),
);