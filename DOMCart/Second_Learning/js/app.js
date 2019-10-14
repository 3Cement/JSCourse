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

// Destructuring functions (new method) with default parameters

function reservation(complete, 
        {
            paymentMethod = 'cash',
            amount = 0,
            days = 0
        } = {}
    ) {

    console.log(paymentMethod);
    console.log(amount);
    console.log(days);
}

reservation( 
    true, 
    {
        paymentMethod: 'creditCard',
        amount: 3000,
        days: 20
    }
)