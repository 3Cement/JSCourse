// // Object Literals

// const client = {
//     name: 'Juan',
//     balance: 1000,
//     membership: function() {
//         let name;
//         // Check the balance
//         if(this.balance > 1000) {
//             name = 'Gold';
//         } else if(this.balance > 500) {
//             name = 'Platinum';
//         } else {
//             name = 'Normal';
//         }
//         return name;
//     }
// }
// console.log(client);
// console.log(client.name);
// console.log(client.balance);
// console.log(client.membership() );


// Object Constructor

// function Client(name, balance) {
//     this.name = name;
//     this.balance = balance;
//     this.membership = function() {
//         let name;

//         // check for the balance
//         if(this.balance > 1000) {
//             name = 'Gold';
//         } else if (this.balance > 500) {
//             name = 'Platinum';
//         } else {
//             name = 'Normal';
//         }
//         return name;
//     }
// }

// const person = new Client('Juan', 1200);
// const person2 = new Client('Karen', 600);

// console.log(person);
// console.log(person.membership());
// console.log(person2);


// // String 
// const name1 = 'Karen';
// const name2 = new String('Karen');

// console.log(name1);
// console.log(typeof name1);
// console.log(name2);
// console.log(typeof name2);

// // YES
// if(name1 == name2) {
//     console.log('Yes');
// } else {
//     console.log('No');
// }

// // NO
// if(name1 === name2) {
//     console.log('Yes');
// } else {
//     console.log('No');
// }

// // Numbers
// const number1 = 20;
// const number2 = new Number(20);

// console.log(number1);
// console.log(typeof number1);
// console.log(number2);
// console.log(typeof number2);


// Functions
// const function1 = function(a, b) {
//     return a + b;``
// }
// const function2 = new Function('a', 'b', 'return a + b');

// console.log(function1(2,3));
// console.log(typeof function1(2,3));
// console.log(function2(5,5));
// console.log(typeof function2(5,5));

// // Objects
// const person1 = {name: 'Juan'};
// const person2 = new Object({name: 'Juan'});

// console.log(person1);
// console.log(typeof person1);
// console.log(person2);
// console.log(typeof person2);

// // Arrays
// const array1 = [1,2,3,4];
// const array2 = new Array(1,2,3,4);

// console.log(array1);
// console.log(typeof array1);
// console.log(array2);
// console.log(typeof array2);

// Object Constructor

// function Client(name, balance) {
//     this.name = name;
//     this.balance = balance;
// }

// // Attach the prototype to the method
// Client.prototype.membership = function() {
//         let name;

//         // check for the balance
//         if(this.balance > 1000) {
//             name = 'Gold';
//         } else if (this.balance > 500) {
//             name = 'Platinum';
//         } else {
//             name = 'Normal';
//         }
//         return name;
// }
// // Second prototype with the name and the balance.
// Client.prototype.clientInfo = function() {
//     return `Name: ${this.name}, Balance ${this.balance}, Membership: ${this.membership() }`
// }
// // Another method to withdraw money from the account
// Client.prototype.withdraw = function(amount) {
//     this.balance -= amount;
// }
// // Create a deposit method
// Client.prototype.deposit = function(amount) {
//     this.balance += amount;
// }
// // Check the balance
// Client.prototype.getBalance = function() {
//     return this.balance;
// }

// const person = new Client('Juan', 2000);
// const person2 = new Client('Karen', 600);

// // console.log(Client.prototype);

// // console.log(person);
// // console.log(person.membership() );
// // console.log(person.clientInfo() );
// // person.withdraw(1000);
// // console.log(person.clientInfo() );
// // person.deposit(500);
// // console.log(person.clientInfo() );
// // console.log('--------------------');

// // console.log(person2.membership() );
// // console.log(person2);

// // Business
// function Business(name, balance, phone, category) {
//     Client.call(this, name, balance);
//     this.phone = phone;
//     this.category = category;
// }
// // Inherit the prototypes
// Business.prototype = Object.create(Client.prototype);

// // Return the constructor as Business
// Business.prototype.constructor = Business;

// Client.prototype.businessInfo = function() {
//     return `Name: ${this.name}, Balance ${this.balance}, 
// Membership: ${this.membership() }, Category: ${this.category}, 
// Phone: ${this.phone}`
// }

// // Create a Business
// const business = new Business('Udemy', 100000, 789234112, 'Education');

// console.log(business);
// console.log(business.businessInfo() );

// Object Create
// const Client = {
//     getBalance : function() {
//         return `hello ${this.name} your balance is ${this.balance}`;
//     },
//     withdraw : function(amount) {
//         return this.balance -= amount;
//     },
//     deposit : function(amount) {
//         return this.balance += amount;
//     }
// }

// // Create a nwe object and give a balance

// const mary = Object.create(Client);
// // Attach the properties
// mary.name = 'Mary';
// mary.balance = 1000;

// console.log(mary);
// console.log(mary.getBalance() );

// // Withdraw some money
// mary.withdraw(500);
// console.log(mary.getBalance() );

// // Deposit some money
// mary.deposit(1200);
// console.log(mary.getBalance() );

// // Another Method
// const juan = Object.create(Client, {
//     name : {value: 'Juan'},
//     balance : {value: 1000}
// })

// console.log(juan);


// // Callbacks

// const cities = ['London', 'New York', 'Madrid', 'Paris', 'Berlin'];

// // // Initial Callbacks
// // cities.forEach(function(city) {
// //     console.log(city);
// // });

// // callback with function declaration
// function callback(city) {
//     console.log(city);
// }
// cities.forEach(callback);




// Destructuring 

// The old way
// const client = {
//     name: 'Alexa',
//     membership: 'Premium'
// }

// let name = client.name,
//     membership = client.membership;

// console.log(name);
// console.log(membership);

// The new way

// let name, membership;

// const client = {
//     name: 'Alexa',
//     membership: 'Premium'
// }

// name = 'Mary';
// membership = 'Platinum';

// ({name, membership} = client);
// console.log(name);
// console.log(membership);

// Extract object that's inside another object

// const client = {
//     membership: 'Premium',
//     name: 'Paul',
//     data: {
//         clientLocation: {
//             city: 'Mexico',
//             country: 'Mexico'
//         },
//         account: {
//             memberSince: '10-12-2012',
//             balance: 4000
//         }
//     }
// }

// // console.log(client);

// let { data: {clientLocation} } = client;

// console.log(clientLocation);
// console.log(clientLocation.city);
// console.log(clientLocation.country);

// let {data: {account}} = client;

// console.log(account);
// console.log(account.memberSince);
// console.log(account.balance);

// Default values when destructuring

// const client = {
//     name: 'Juan',
//     membership: 'Premium',
// }

// console.log(client);

// // Destructuring
// let {name, membership, balance = 0} = client;

// console.log(balance);

// Destructuring with arrays

// let cities = ['London', 'New York', 'Madrid', 'Paris'];

// let [
//     ,
//     ,
//     anotherCity,
//     paris
// ] = cities;

// // console.log(firstCity);
// console.log(anotherCity);
// console.log(paris);

// // More in depth example
// const client = {
//     membership: 'Premium',
//     balance: 30000,
//     data: {
//         name: 'Paul',
//         lastName: 'Banks',
//         living: {
//             city: 'London',
//             country: 'UK'
//         }
//     },
//     lastMovements: ['12-03-2018', '10-03-2018', '08-03-2018']
// }

// // console.log(client);

// let {
//     data: {living},
//     lastMovements: [, , third]
// } = client;

// console.log(living);
// console.log(third);

// Destructuring functions (old method)

// function reservation(complete, options) {
//     options = options || {};
//     let payment = options.paymentMethod,
//         amount = options.amount;
//         days = options.days;

//     console.log(payment);
//     console.log(amount);
//     console.log(days);
// }

// reservation( 
//     true, 
//     {
//         paymentMethod: 'creditCard',
//         amount: 3000,
//         days: 3
//     }
// )

// // Destructuring functions (new method) with default parameters

// function reservation(complete, 
//         {
//             paymentMethod = 'cash',
//             amount = 0,
//             days = 0
//         } = {}
//     ) {

//     console.log(paymentMethod);
//     console.log(amount);
//     console.log(days);
// }

// reservation( 
//     true, 
//     {
//         paymentMethod: 'creditCard',
//         amount: 3000,
//         days: 20
//     }
// )

// const client = Symbol('Client Symbol');

// console.log(client);

// // Symbols are always different 

// console.log(Symbol() === Symbol());

// let firstName = Symbol();
// let lastName = Symbol();

// // Create an empty object

// const person = {};

// person[firstName] = 'Juan';
// person[lastName] = 'De la torre';

// // Standard properties
// person.membership = 'Premium';
// person.amount = 500;

// console.log(person.membership);
// console.log(person.amount);
// console.log(person[firstName]);
// console.log(person[lastName]);
// console.log(person);

// for(let i in person) {
//     console.log(`${person[i]}`);
// }

// /* You can also add a description **/

// let clientName = Symbol('Client Name');

// let client = {};

// client[clientName] = 'Peter';

// // Test

// console.log(client);
// console.log(client[clientName]);
// console.log(clientName);

// // Create a set

// let shoppingCart = new Set();
// shoppingCart.add('Shirt');
// shoppingCart.add('Album #1');
// shoppingCart.add('Album #2');
// shoppingCart.add('Album #3');
// shoppingCart.add('Album #3');

// console.log(shoppingCart);

// // Get length of the set

// console.log(shoppingCart.size);

// // Check if a value exist on a set

// console.log(shoppingCart.has('Album #3'));

// // Remove from the set
// // shoppingCart.delete('Album #1')

// // Clear the set
// // shoppingCart.clear();

// console.log(shoppingCart);

// shoppingCart.forEach((product, index, isPart) => {
//     console.log(`${index} : ${product}`);
//     console.log(isPart === shoppingCart);
// })

// console.log(shoppingCart);

// // Convert the set into a array
// const shoppingCartArray = [...shoppingCart];

// console.log(shoppingCartArray);

// let client = new Map();
// client.set('name', 'Karen');
// client.set('membership', 'Premium');
// client.set('balance', 3000);

// // ForEach into a map

// client.forEach((clientInfo, index) => {
//     console.log(`${index} ${clientInfo}`);
// })


// // access the values

// // console.log(client.get('name'));
// // console.log(client.get('membership'));
// // console.log(client.get('balance'));

// // Map Methods

// // Map Size
// console.log(client.size);

// // Check if a value exists
// console.log(client.has('membership'));
// console.log(client.get('membership'));

// // Remove elements from the MAP
// client.delete('name');

// // Clear the map

// client.clear();

// // Default values into the map

// const patient = new Map([['name', 'Patient Name'], ['room', 'Not Defined']]);
// patient.set('name', 'Paul')
// patient.set('room', '404')

// console.log(patient);
// console.log(client);

// Iterators

// function createIterator(cart){
//     let i = 0;
//     return {
//         nextProduct: function() {
//             let end = ( i >= cart.length );
//             let value = !end ? cart[i++] : undefined;

//             return {
//                 end: end,
//                 value: value
//             }
//         }
//     }
// }



// const shoppingCart = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];

// const shoppingCartIterator = createIterator(shoppingCart);

// console.log(shoppingCartIterator.nextProduct());
// console.log(shoppingCartIterator.nextProduct());
// console.log(shoppingCartIterator.nextProduct());
// console.log(shoppingCartIterator.nextProduct());
// console.log(shoppingCartIterator.nextProduct());

// Generators

// function *createGenerator() {
//     // Yield
//     yield 1;
//     yield ' Name of the person';
//     yield 3+3;
//     yield true;
//     yield 'Hello from Generator';
// }

// const iterator = createGenerator();

// console.log(iterator.next());
// console.log(iterator.next().done);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().done);
// console.log(iterator.next().done);

// Create the generator
function *newGenerator(cart) {
    for(let i = 0; i < cart.length; i++) {
        yield cart[i];
    }
}

// Shopping Cart

const cart = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];

// Loop in the iterator

let iterator = newGenerator(cart);

console.log(iterator.next() );
console.log(iterator.next() );
console.log(iterator.next() );
console.log(iterator.next() );
console.log(iterator.next() );