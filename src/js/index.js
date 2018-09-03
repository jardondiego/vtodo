import List from './list';
import Todo from './todo';
import '../css/index.css';

let addTodoListForm = document.querySelector('#add-todo-list'),
    mainContainer = document.querySelector('.container');

addTodoListForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validation 
    if (e.target.firstElementChild.value.trim() === '') return;
    
    mainContainer.prepend(List(e.target.firstElementChild.value));
    // Clear input
    e.target.firstElementChild.value = '';
});

window.onload = () => {
    mainContainer.appendChild(List('title'));
    document.querySelector('.todo-list__todos').appendChild(Todo('xd'));
}