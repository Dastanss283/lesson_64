'use strict';
const list = document.querySelector('ul');

list.addEventListener('dblclick', function (ev) {

    if(ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
        toLloca();

    } else if(ev.target.tagName === "SPAN") {
        const div = ev.target.parentNode;

        div.remove();
        toLocal()

    }
}, false);

function newElement() {
    const li = document.createElement('li');
    const inputValue = document.getElementById('toDoEl').value;

    const t = document.createTextNode(inputValue);
    li.appendChild(t);

    if(inputValue === "") {
        alert("Введите ваше дело!");
    } else {
        document.getElementById('list').appendChild(li);
    }

    document.getElementById('toDoEl').value = "";
    toLocal();
}
let todos;

function toLocal() {
    todos = list.innerHTML;
    localStorage.setItem('todos', todos);
}
