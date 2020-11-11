
const addDragons = (main, names) => {
    const ul = document.createElement('ul');
    let li, content;

    for (const { id, name } of names) {
        li = document.createElement('li');
        content = document.createTextNode(name);
        li.appendChild(content);
        ul.appendChild(li);
    }

    main.appendChild(ul);
}

const addCount = (main, count) => {
    const p = document.createElement('p');
    let content;
    content = document.createTextNode(count);
    p.appendChild(content);

    main.appendChild(p);
}


export { addDragons, addCount };