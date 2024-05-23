#! /usr/bin/env node
import inquirer from "inquirer";
let currancyconverter = {
    "USD": {
        "USD": 1,
        "EUR": 0.94,
        "PKR": 277.30,
    },
    "PKR": {
        "USD": 0.0036,
        "EUR": 0.0034,
        "PKR": 1,
    },
    "EUR": {
        "USD": 1.08,
        "EUR": 1,
        "PKR": 301.30,
    },
};
//Input Prompt
const answer = await inquirer.prompt([
    {
        name: "from",
        message: "Entre your currancy",
        type: "list",
        choices: ["USD", "EUR", "PKR",]
    },
    {
        name: "to",
        message: "Select currancy that you like to convert",
        type: "list",
        choices: ["USD", "EUR", "PKR",]
    },
    {
        name: "amount",
        message: "Entre your amount in number only",
        type: "number",
        choices: ["USD", "EUR", "PKR",]
    },
]);
const { from, to, amount } = answer;
//Conversation 
if (from && to && amount) {
    let result = currancyconverter[from][to] * amount;
    console.log(`your conversation from ${from} to ${to} is ${result}`);
}
else {
    console.log("ERROR 404");
}
