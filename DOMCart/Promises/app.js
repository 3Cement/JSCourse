// Promises

const applyDiscount = new Promise(function(resolve, reject) {
    // Resolve is going to execute when the function is succesful
    // Reject when the function or the task has failed
    const discount = false;

    if(discount) {
        resolve('Discount Applied');
    } else {
        reject('Discount failed...');
    }
});

// When we are using promise we have to use .then after function name
applyDiscount.then(function(result) {
    // print reslove value
    console.log(result)
}).catch(function(result) {
    // print reject value
    console.log(result);
});