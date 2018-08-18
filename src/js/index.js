import List from './list'
import Todo from './todo'
import '../css/index.css'

let addTodoListForm = document.getElementById('add-todo-list'),
    mainContainer = document.getElementById('container')

addTodoListForm.addEventListener('submit', function (e) {
    e.preventDefault()

    // Validation 
    if (e.target.firstElementChild.value.trim() === '') return
    
    mainContainer.appendChild(List(e.target.firstElementChild.value))
    // Clear input
    e.target.firstElementChild.value = ''
})

window.onload = function () {
    mainContainer.appendChild(List('title'))
    document.querySelector('.todo-list__todos').appendChild(Todo('xd'))
}