// // Async Await

// async function getClients() {
//     // Create a new promise
//     const clients = new Promise((resolve, reject) => {
//         setTimeout( () => {
//             resolve('Client list downloaded...')
//         }, 1000)
//     });

//     const error = false;

//     if(!error){
//         const response = await clients; // hold until clients is executed
//         return response
//     } else {
//         await Promise.reject('There was an error');
//     }
// }

// getClients()
//     .then(response => console.log(response))
//     .catch(error => console.log(error));

// Async Await with a REST API

async function getPosts() {
    // wait until the post are downloaded

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    // Execute then
    
    const data = await response.json();

    // console log until the second await finish executing

    return data;
}

getPosts()
    .then( posts => console.log( posts ));