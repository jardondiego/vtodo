import List from './list'
import '../css/state.css'

let addTodoListForm = document.getElementById('add-todo-list')

addTodoListForm.addEventListener('submit', function (e) {
    e.preventDefault();
    document.body.append(List(e.target.firstElementChild.value))
    e.target.firstElementChild.value = ''
})