export default function theContact(){
    document.body.style.backgroundImage = "url('../img/phone.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    let body = document.querySelector('body');
    let content = document.createElement('div');
    content.classList.add('content');
    content.textContent = "";

    let paragraph = document.createElement('p');
    paragraph.textContent = "Contact us."
    let paragraph2 = document.createElement('p');
    paragraph2.textContent = "notfake@notaFakeEmail.com"

    body.appendChild(content);
    content.appendChild(paragraph);
    content.appendChild(paragraph2);
}