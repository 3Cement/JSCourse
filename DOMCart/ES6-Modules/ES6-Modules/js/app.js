// import from client.js
import {clientName, amount, Client} from './client.js'
// import * as clientInfo from './client.js'

// console.log(clientInfo)
// console.log(clientInfo.clientName);
// console.log(clientInfo.amount)

// console.log(clientName);
// console.log(amount);

// use the function
// let client = displayClientInfo(clientName, amount);
// console.log(client);

// use the class
let client = new Client('Juan', 500);
console.log(client);
console.log(client.displayClientInfo());