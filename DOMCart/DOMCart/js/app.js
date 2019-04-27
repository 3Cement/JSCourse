// let element

// element = document;
// element = document.all;
// element = document.all[200];
// element = document.head;
// element = document.body;
// element = document.domain;
// element = document.URL;
// element = document.characterSet;
// element = document.contentType;

// // Links
// element = document.links;
// element = document.links[2];
// element = document.links[2].id;
// element = document.links[2].className;
// element = document.links[2].classList;

// // Forms
// element = document.forms;
// element = document.forms[0];

// // Images
// element = document.scripts;
// element = document.scripts[0];
// element = document.scripts[0].getAttribute('src');

// // Looping all the images
// let images = document.images;
// let imagesArray = Array.from(images);

// imagesArray.forEach(function(image) {
//     console.log(image);
// });

// console.log(imagesArray);
// console.log(element);

// Selecting DOM ELEMENTS
// let heading = document.getElementById('heading');

// console.log(heading.classList);
// console.log(heading.textContent);

// // Change the CSS
// heading.style.background = '#333';
// heading.style.color = '#FFFFFF';
// heading.style.padding = '20px';
// heading.style.marginTop = '50px';

// // CHange the text
// heading.textContent = 'The best courses!';
// // another way
// heading.innerText = 'New heading';

// Query Selector
// const learningHeading = document.querySelector('#learn');

// learningHeading.textContent = 'New heading'

// // console.log(learningHeading);

// // Select a class with querySelector
// const tagline = document.querySelector('.tagline');

// const newText = tagline.textContent.replace('$15', '$12');

// tagline.textContent = newText;

// let card = document.querySelector('.card');

// console.log(card);

// // Selecting a tag
// let heading = document.querySelector('h2');

// console.log(heading);

// // Nest your selectors with a CSS syntax
// let image = document.querySelector('.card img')

// Query selector supports nth-child, first-child or last-child
// let link ;

// link = document.querySelector('#primary a');
// link = document.querySelector('#primary a:first-child');
// link = document.querySelector('#primary a:last-child');
// link = document.querySelector('#primary a:nth-child(2)');

// console.log(link);

// getElementsByClassName

// const links = document.getElementsByClassName('link');
// const links = document.querySelector('#primary').getElementsByClassName('link');
// const links = document.getElementById('primary').getElementsByClassName('link');

// links[0].style.color = 'red';
// links[0].textContent = 'New text';
// links[0].style.background = 'black';
// console.log(links);

// getElementsByTagName
// const images = document.getElementsByTagName('img');

// // Convert HTML Collection into an array
// imagesArray = Array.from(images);

// imagesArray.forEach(function(image) {
//     console.log(image);
// });

// // console.log(images);
// // console.log(images[0]);
// console.log(imagesArray);

// getElementsByTagNAme


// // CHange all the add-to-cart button text
// const addCartBtns = document.querySelectorAll('.add-to-cart');

// addCartBtns.forEach(function(button) {
//     button.textContent = 'Something New';
// })
// console.log(addCartBtns);

// Traversing
// const navigation = document.querySelector('#primary');

// let element;

// element = navigation.children[0].nodeType;
// element = navigation.children[0];

// // 1 = Element
// // 2 - Attributes
// // 3 = Text Nodes
// // 8 = Comments
// // 9 = document
// // 10 = doctype

// console.log(element);

// Traversing from the children to parent
// const cartBtn = document.querySelector('.add-to-cart');

// let element
// // Parent Node
// element = cartBtn;
// element = cartBtn.parentElement;

// console.log(element);

// Create a new element

// create a new <a>
const newLink = document.createElement('a');

// add a class
// newLink.className = 'link';

// // add the href
// newLink.href = '#';
// // newLink.setAttribute('href', '#');

// // add the text
// newLink.appendChild( document.createTextNode('New Link') );

// // Add the element to the HTML
// document.querySelector('#primary').appendChild(newLink);

// console.log(newLink);

// // Replace an element
// const newHeading = document.createElement('h2');

// // add an id
// newHeading.id = 'heading';

// // add the class
// newHeading.classList.add('heading');

// // add the new text
// newHeading.appendChild( document.createTextNode('The Best Courses') );

// // Select the old heading
// const oldHeading = document.querySelector('#heading');

// // Parent
// const coursesList = document.querySelector('#courses-list')

// // Then, replace!
// coursesList.replaceChild(newHeading, oldHeading);

// console.log(newHeading);

// Remove Elements
// const links = document.querySelectorAll('.link');
// links[0].remove();

// console.log(links);


// Classes, Ids & Attributes
// const link = document.querySelector('.link');
// let element

// element = link;

// // read the class
// element = link.className;
// // read the class (DOM TOken List)
// element = link.classList;
// // Access specific class with classlist
// element = link.classList[0];
// // Add a new class
// link.classList.add('new-class');
// // remove the class
// link.classList.remove('link');

// // Ids
// link.id = 'new-id'; 
// // Remove the id
// link.id = '';
// link.removeAttribute('id');

// // Attribute function
// element = link.getAttribute('href');
// element = link.getAttribute('class');
// element = link.setAttribute('href', 'http://something.com');
// element = link.setAttribute('target', '_blank');
// element = link.setAttribute('data-link', '10');
// element = link.hasAttribute('data-link');
// element = link.removeAttribute('data-link');

// console.log(element);

// Event Listeners
// 1 way!
// document.getElementById('clear-cart').addEventListener('click', function() {
//     console.log('You Clicked the button');
// });

// 2 way
// const clearCartBtn = document.getElementById('clear-card');
// clearCartBtn.addEventListener('click', function() {
//     console.log('You Clicked the button');
// });

// 3 way
// const clearCartBtn = document.getElementById('clear-cart');
// clearCartBtn.addEventListener('click', clearBtnFunction ); 

// function clearBtnFunction() {
//     console.log('You clicked me!');
// }


// const clearCartBtn = document.getElementById('clear-cart');
// clearCartBtn.addEventListener('click', clearBtnFunction ); 

// function clearBtnFunction(e) {
//     // target

//     let element;
//     element = e;

//     // read the target
//     element = e.target;
//     element = e.target.id;
//     element = e.target.className;
//     element = e.target.innerText;
//     element = e.target.innerText = 2 + 2;

//     console.log(element);
// }

// Mause Events
// create the variables

// const heading = document.querySelector('#heading');
// const links = document.querySelector('nav');
// const clearCartBtn = document.querySelector('#clear-cart');

// Click Mouse Event
// clearCartBtn.addEventListener('click', printEvent);
// Mouse enter
// clearCartBtn.addEventListener('mouseenter', printEvent);
// Mouse Leave
// clearCartBtn.addEventListener('mouseleave', printEvent)
// Mouse over
// clearCartBtn.addEventListener('mouseover', printEvent)
// Mouse out
// clearCartBtn.addEventListener('mouseout', printEvent)
// Mouse up
// clearCartBtn.addEventListener('mouseup', printEvent)
// Mouse down
// clearCartBtn.addEventListener('mousedown', printEvent)

// Mouse Move
// heading.addEventListener('mousemove', printEvent);

// function printEvent(e) {
//     // console.log(e);
//     console.log(`THE EVENT IS: ${e.type}`);
// }

// console.log(heading);

// Input and Form Events

// create the variables
// const searchForm = document.getElementById('search'),
//       searchInput = document.getElementById('search-course');

// // Events for <form>
// searchForm.addEventListener('submit', printEvent);

// Input Events
// searchInput.addEventListener('keyup', printEvent);
// searchInput.addEventListener('keydown', printEvent);
// searchInput.addEventListener('keypress', printEvent);
// searchInput.addEventListener('focus', printEvent);
// searchInput.addEventListener('blur', printEvent);
// searchInput.addEventListener('cut', printEvent);
// searchInput.addEventListener('copy', printEvent);
// searchInput.addEventListener('paste', printEvent);
// searchInput.addEventListener('input', printEvent);

// function printEvent(e) {
//     // e.preventDefault();
//     // if(searchInput.value.length == 0) {
//     //     alert('Type Something! Please ');
//     // }

//     // Print the value from the input
//     console.log(searchInput.value);
//     console.log(`Type: ${e.type}`)
// }

// Event Bubbling
// Variables
// const card = document.querySelector('.card'),
//       infoCards = document.querySelector('.info-card'),
//       addCardBtn = document.querySelector('.add-to-cart');

// // Even Listeners

// card.addEventListener('click', function(e) {
//     console.log('You clicked the card');
//     e.stopPropagation();
// })

// infoCards.addEventListener('click', function(e) {
//     console.log('You clicked the info');
//     e.stopPropagation();
// })

// addCardBtn.addEventListener('click', function(e) {
//     console.log('You clicked on the add to cart btn');
//     e.stopPropagation();
// })

// Delegation
// const shoppingCart = document.querySelector('#shopping-cart');

// shoppingCart.addEventListener('click', removeProductFromCart);

// function removeProductFromCart(e) {
//     // console.log(e.target.classList);

//     if(e.target.classList.contains('remove')){
//         // console.log(e.target.parentElement.parentElement);
//         e.target.parentElement.parentElement.remove();
//     } else {
//         console.log('No');
//     }
// }

// Add to cart

// const courseList = document.querySelector('#courses-list');

// courseList.addEventListener('click', addToCart);

// function addToCart(e) {
//     if(e.target.classList.contains('add-to-cart')){
//         console.log('Course added!!');
//     }
// }

// Local Storage

// Add to local storage
// localStorage.setItem('name', 'Daniel');

// Add to session storage
// sessionStorage.setItem('name', 'Daniel');

// remove from the storage
// localStorage.removeItem('name');

// read the value
// const name = localStorage.getItem('name');

// console.log(name);

// clear the storage
// localStorage.clear();

// localStorage.setItem('name', 'Daniel');
// localStorage.setItem('name', 'Danielek');

// const localStorageContent = localStorage.getItem('names');

// let names;
// if(localStorageContent === null) {
//     names = [];
// } else {
//     names = JSON.parse(localStorageContent)
// }

// // console.log(JSON.parse(localStorageContent));

// const myArray = [1,2,3];

// // console.log(myArray);
// names.push('JA');
// // names.push('Walter White');
// // names.push('WaltJohn Doe');
// localStorage.setItem('names', JSON.stringify( names ));

// // console.log(JSON.stringify( names )); // Convert to the string, In storage we can use save only string

// console.log(localStorageContent);