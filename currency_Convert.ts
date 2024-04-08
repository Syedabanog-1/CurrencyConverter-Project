#! /usr/bin/env node

import inquirer from "inquirer"

const currency: any = {
USD: 1,
PKR: 280,
AFG: 71,
CAD: 204,
DIN: 40,
EUR: 0.91,
INR: 74.57
};

let user_Answer = await inquirer.prompt([
{
name: "from",
message: " Enter your Currency From",
type: "list",
choices: ["USD","PKR","AFG","CAD","DIN","EUR","INR"]
},
{
name: "to",
message: " Enter your Currency To",
type: "list",
choices: ["USD","PKR","AFG","CAD","DIN","EUR","INR"]
},
{
name: "amount",
message: " Enter your Amount",
type: "number",ublish
},
]);

let fromAmount = currency[user_Answer.from];
let toAmount = currency[user_Answer.to];
let amount = user_Answer.amount;
let baseAmount = amount / fromAmount ;
let convertAmount = baseAmount * toAmount;
//console.log("Covert From " , fromAmount , " Convrt To" , toAmount, "Conversion Amount is", convertAmount);
console.log("Conversion Amount is", Math.round(convertAmount));