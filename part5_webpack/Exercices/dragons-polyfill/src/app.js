import 'babel-polyfill';

import dragons from './dragons';

const { names } = dragons;

const ul = document.createElement('ul');
let li, content;

for (const dragon of names) {
        
        li = document.createElement('li');
        content = document.createTextNode(`
Name : ${ dragon?.name ?? 'no name' }
Element : ${dragon?.element ?? 'no element'}
`
        );
        li.appendChild(content);
        ul.appendChild(li);
        main.appendChild(ul);
}