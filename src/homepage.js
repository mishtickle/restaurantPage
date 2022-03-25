import myImage from '../img/restaurant.jpg'

export default function theTitle(){
    let body = document.querySelector('body');
    let content = document.createElement('div');
    let title = document.createElement('h1');
    title.textContent = "BILLY'S DINER";
    content.classList.add('content');
    const image = document.createElement('img');
    image.src = myImage;
    body.appendChild(content);
    content.appendChild(title);
    content.appendChild(image);
    

}

