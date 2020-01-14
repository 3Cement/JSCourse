let DB;

const form = document.querySelector('form'),
      petName = document.querySelector('#pet-name'),
      ownerName = document.querySelector('#owner-name'),
      phone = document.querySelector('#phone'),
      date = document.querySelector('#date'),
      hour = document.querySelector('#hour'),
      symptoms = document.querySelector('#symptoms'),
      appointments = document.querySelector('#appointments'),
      appointmentTitle = document.querySelector('#appointment-title');

document.addEventListener('DOMContentLoaded', () => {
    // create the database
    let AppointmentDB = window.indexedDB.open('appointments', 1);

    // if there's an error
    AppointmentDB.onerror = function() {
        console.log('There was an error');
    }
    // if everything is fine, assign the result to the instance
    AppointmentDB.onsuccess = function() {
        // console.log('Database Ready');

        // save the result
        DB = AppointmentDB.result;
    }
    
    // This method runs once (great for creating the schema)
    AppointmentDB.onupgradeneeded = function(e) {
        // the event will be the database
        let db = e.target.result;

        // create an object store,
        // keypath is going to be the Indexes
        let objectStore = db.createObjectStore('appointments', { keyPath: 'key', autoIncrement: true } );

        // createindex: 1) field name 2) keypath 3) options
        objectStore.createIndex('petname', 'petname', { unique: false } );

        console.log('Database ready and fields created!');

    }
})