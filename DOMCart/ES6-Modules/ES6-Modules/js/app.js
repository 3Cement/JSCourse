// import from client.js
import { Client } from './client.js'
import { Business } from './business.js'
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
console.log(client.displayClientInfo() );

// using the business class
let business = new Business('Udemy', 100000000, 'Education');
console.log(business.displayClientInfo());