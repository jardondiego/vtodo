import List from './list'
import '../css/index.css'

let addTodoListForm = document.getElementById('add-todo-list')
let masonry = document.getElementById('content')
let masonryColumns = Array.from(document.getElementById('content').children)

masonry.addEventListener('rearrange', function (e) {
    let lists = []
    masonryColumns.forEach(column => lists.push(...Array.from(column.children)))
    rearrange(masonryColumns, lists)
})

masonryColumns.forEach(
    column => column.addEventListener('delete-list', function (e) {
        column.parentElement.dispatchEvent(new Event('rearrange'))
    })
)

addTodoListForm.addEventListener('submit', function (e) {
    // Validation
    e.preventDefault()
    
    // Reset form
    e.target.firstElementChild.value = ''
})