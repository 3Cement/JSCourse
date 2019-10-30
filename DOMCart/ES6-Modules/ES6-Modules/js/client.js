export const clientName = 'Juan';
export let amount = 200;

// export function displayClientInfo(name, amount) {
//     return `Client: ${name} - Amount: ${amount}`;
// }

// export const displayClientInfo = (name, amount) => {
//     return `Client: ${name} - Amount: ${amount}`;
// }

// Create the Client Class
export class Client {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    displayClientInfo() {
        return `Client: ${this.name} - Amount: ${this.amount}`;
    }
}