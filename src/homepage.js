//import myImage from '../img/restaurant.jpg'

export default function theTitle(){
    document.body.style.backgroundImage = "url('../img/restaurant.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    
    let body = document.querySelector('body');
    let content = document.createElement('div');
    let title = document.createElement('h1');
    
    
    title.textContent = "";
    content.classList.add('content');

    let paragraph = document.createElement('p');
    paragraph.textContent = "Simply the best steakhouse in Auckland."
    let paragraph2 = document.createElement('p');
    paragraph2.textContent = "Our steaks are grown from premium grass fed Angus beef."
    let paragraph3 = document.createElement('p');
    paragraph3.textContent = "And the salad with your meal is fully organic."
    let paragraph4 = document.createElement('p');
    paragraph4.textContent = "Critically acclaimed dining, right on the waterfront."
    let paragraph5 = document.createElement('p');
    paragraph5.textContent = "HOURS";
    let paragraph6 = document.createElement('p');
    paragraph6.textContent = "12.00pm to 10.00pm Tuesday to Sunday";
    let paragraph7  = document.createElement('p');
    paragraph7.textContent = "Park Road, Auckland"


    body.appendChild(content);
    content.appendChild(title);
    content.appendChild(paragraph);
    content.appendChild(paragraph2);
    content.appendChild(paragraph3);
    content.appendChild(paragraph4);
    content.appendChild(paragraph5);
    content.appendChild(paragraph6);
    content.appendChild(paragraph7);
}

