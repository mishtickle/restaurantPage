//import myImage from '../img/restaurant.jpg'

export default function theTitle(){
    let body = document.querySelector('body');
    let content = document.createElement('div');
    let title = document.createElement('h1');
    title.textContent = "BILLY'S DINER";
    content.classList.add('content');
    body.appendChild(content);
    content.appendChild(title);
    document.body.style.backgroundImage = "url('../img/restaurant.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
   
    

}

