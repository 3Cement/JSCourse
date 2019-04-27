document.getElementById('button').addEventListener('click', loadData);

function loadData() {

    // Create the new XMLHTTPRequest Object
    const xhr = new XMLHttpRequest();

    // Open the connection
    xhr.open('GET', 'data.txt', true);

    // Execution of the ajax call
    xhr.onload = function() {
        // Codes
        // 200: Correct
        // 400: Forbidden
        // 404: Not found
        console.log(this.status);
        if(this.status === 200) {
            document.getElementById('output').innerHTML = `<h1>${this.responseText}`;
        }
    }

    // Send the Request
    xhr.send();

}