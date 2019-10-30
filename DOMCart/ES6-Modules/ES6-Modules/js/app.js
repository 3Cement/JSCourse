// import from client.js
import {clientName, amount, displayClientInfo} from './client.js'
// import * as clientInfo from './client.js'

// console.log(clientInfo)
// console.log(clientInfo.clientName);
// console.log(clientInfo.amount)

// console.log(clientName);
// console.log(amount);

// use the function
let client = displayClientInfo(clientName, amount);
console.log(client);