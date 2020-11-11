import dragons from './core/dragons';
import { addDragons, addCount } from './core/utils';

const main = document.getElementById('main');
const { names, count, elements } = dragons;

const render = async () => {
    await addCount(main, count);
    await addDragons(main, names, elements);
}

document.addEventListener('DOMContentLoaded', () => console.log('dom ready..'));

document.body.onload = render;