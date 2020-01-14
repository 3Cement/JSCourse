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
        objectStore.createIndex('ownername', 'ownername', { unique: false } );
        objectStore.createIndex('phone', 'phone', { unique: false } );
        objectStore.createIndex('date', 'date', { unique: false } );
        objectStore.createIndex('hour', 'hour', { unique: false } );
        objectStore.createIndex('symptoms', 'symptoms', { unique: false } );

        console.log('Database ready and fields created!');

    }

    form.addEventListener('submit', addAppointment);

    function addAppointment(e) {
        e.preventDefault();

        // create a new object with the form info
        let newAppointment = {
            petname: petName.value,
            ownername: ownerName.value,
            phone: phone.value,
            date: date.value,
            hour: hour.value,
            symptoms: symptoms.value,
        }
        // console.log(newAppointment);

        // Insert the object into the database
        let transaction = DB.transaction(['appointments'], 'readwrite');
        let objectStore = transaction.objectStore('appointments');

        console.log(objectStore);
        let request = objectStore.add(newAppointment);

        // on success
        request.onsuccess = () => {
            form.reset();
        }
        transaction.oncomplete = () => {
            console.log('New appointment added');
        }
        transaction.onerror = () => {
            console.log('There was an error, try again!');
        }
    }
})