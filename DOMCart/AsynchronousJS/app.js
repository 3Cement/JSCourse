// Callbacks

const cities = ['London', 'New York', 'Madrid', 'Paris', 'Berlin', 'Sejny'];

// Inline Callbacks (when function like below doesn't have a name)
// cities.forEach(function(city) {
//     console.log(city);
// });

// callback with function declaration
// function callback(city) {
//     console.log(city);
// }

// cities.forEach(callback);

const countries = ['France', 'Spain', 'Portugal', 'Ukraine', 'Scotland']

function newCountry(country, callback) {
    setTimeout(function() {
        // Add the New country
        countries.push(country);
        
        // Execute the callback
        callback();
    }, 2000);
}

// Display the countries after 1 second
function displayCountries() {
    setTimeout(function() {
        let html = '';
        countries.forEach(function(country) {
            html += `<li>${country}</li>`
        });
        document.body.innerHTML = html;
    }, 1000);
}
// Add a new country
newCountry('Germany', displayCountries);

// Print the countries

displayCountries();
