document.getElementById('button').addEventListener('click', loadData);

function loadData() {

    // Create the new XMLHTTPRequest Object
    const xhr = new XMLHttpRequest();

    // Open the connection
    xhr.open('GET', 'data.txt', true);

    // Execution of the ajax call
    // xhr.onload = function() {
    //     // Codes
    //     // 200: Correct
    //     // 400: Forbidden
    //     // 404: Not found
    //     console.log(this.status);
    //     if(this.status === 200) {
    //         document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    //     }
    // }

    // Another way to make an AJAX call
    xhr.onreadystatechange = function() {
        console.log('Ready State', xhr.readyState);

        // Ready States
        // 0 - Unsent
        // 1 - Opened
        // 2 - Received
        // 3 - Loading
        // 4 - Done

        if(this.status === 200 && this.readyState === 4) {
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // Send the Request
    xhr.send();

}