export default function theMenu(){
    document.body.style.backgroundImage = "url('../img/steakNBeer.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    let body = document.querySelector('body');
    let content = document.createElement('div');
    content.classList.add('content');
    content.textContent = "";

    let paragraph = document.createElement('p');
    paragraph.textContent = "We only serve steak.  Steak and beer, that is."
    let paragraph2 = document.createElement('p');
    paragraph2.textContent = "A fine steak and beer dining combination."

    body.appendChild(content);
    content.appendChild(paragraph);
    content.appendChild(paragraph2);
}