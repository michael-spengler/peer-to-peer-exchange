import { Client } from "https://deno.land/x/mysql/mod.ts";
// config
import { DATABASE, TABLE } from "./config.ts";


// TODO: Give db password through environement
const client = await new Client().connect({
  hostname: "127.0.0.1",
  username: "root",
  db: "peer2peer",
  password: "Dasist1Root",
});


/*

-- Buyer table

CREATE TABLE `peer2peer`.`buyers` (
  `idsellers` INT NOT NULL AUTO_INCREMENT,
  `pair` VARCHAR(45) NOT NULL,
  `amount` VARCHAR(45) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `contact` VARCHAR(51) NOT NULL,
  PRIMARY KEY (`idsellers`));


-- Seller table

CREATE TABLE `peer2peer`.`sellers` (
  `idsellers` INT NOT NULL AUTO_INCREMENT,
  `pair` VARCHAR(45) NOT NULL,
  `amount` VARCHAR(45) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `contact` VARCHAR(51) NOT NULL,
  PRIMARY KEY (`idsellers`));

*/

// run();

export default client;