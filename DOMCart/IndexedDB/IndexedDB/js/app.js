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
        console.log('Database Ready');

        // save the result

        DB = AppointmentDB.result;
    }
    
})