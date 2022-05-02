'use strict';

const images = [
    { 'id': '1', 'url':'img/ps5.jpg' },
    { 'id': '2', 'url':'img/controle.jpg' },
    { 'id': '3', 'url':'img/acessorios.jpg' },
]

const containerItems = document.querySelector('#container-items')

const loadImages = (image, container) => {
    image.forEach (image => {
        container.innerHTML += `
        <div class='item'>
        <img src= '${image.url}'> 
        </div>
        `
    })

}
loadImages( images, containerItems );    

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1]
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', previous);