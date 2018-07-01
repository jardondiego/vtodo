import List from './list'
import '../css/index.css'

let addTodoListForm = document.getElementById('add-todo-list')
let masonryColumns = Array.from(document.getElementById('content').children)
let whereDoesItGo = 1

console.log(masonryColumns)

addTodoListForm.addEventListener('submit', function (e) {
    e.preventDefault()
    if (e.target.firstElementChild.value.trim() === '') return
    if (whereDoesItGo === 4) 
        whereDoesItGo = 1
    masonryColumns[whereDoesItGo-1].append(List(e.target.firstElementChild.value))
    whereDoesItGo++
    e.target.firstElementChild.value = ''
})