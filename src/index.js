import _ from 'lodash';
import theTitle from './homepage.js'
import './styles.css';

let body = document.querySelector('body');
let headingContainer = document.createElement('div');
let theHeading = document.createElement('h1')
let tabContainer = document.createElement('div');
tabContainer.classList.add('tabContainer');
theHeading.textContent = "JIM'S DINER";
let button1 = document.createElement('button');
button1.classList.add('button1');
button1.textContent = "Home";
let button2 = document.createElement('button');
button2.classList.add('button2');
button2.textContent = "Menu";
let button3 = document.createElement('button');
button3.classList.add('button3');
button3.textContent = "Contact";


body.appendChild(headingContainer);
headingContainer.appendChild(theHeading);
body.appendChild(tabContainer);
tabContainer.appendChild(button1);
tabContainer.appendChild(button2);
tabContainer.appendChild(button3);

theTitle();

let buttons = document.querySelectorAll('button')
buttons.forEach(buttons =>{
    buttons.addEventListener('click', (e) =>{
        if (buttons.textContent == "Home"){
            let remove = document.querySelector('.content');
            body.removeChild(remove);
            theTitle();
        }
    })
})
