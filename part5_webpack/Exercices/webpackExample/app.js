import { message } from './src/utils.js';

const main = document.getElementById('main');

const addElement = () => {
    const h2 = document.createElement('h2');
    const content = document.createTextNode(message);
    h2.appendChild(content);
    main.appendChild(h2);
}

// attendre que le DOM soit calculé ou la page chargée ...
document.body.onload = addElement;