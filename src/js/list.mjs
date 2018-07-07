import Todo from './todo'

export default function List (title) {

    // Validation
    if (title === undefined || title === '') return null

    // Elements creation
    let list = document.createElement('div'),
        titleElement = document.createElement('h3'),
        deleteList = document.createElement('button'),
        editListTitle = document.createElement('form'),
            newTitle = document.createElement('input'),
            editTitle = document.createElement('button'),
        addTodoForm = document.createElement('form'),
            newTodo = document.createElement('input'),
            addTodo = document.createElement('button'),
        completedList = document.createElement('ul'),
        todos = document.createElement('ul')

    // Element base setup
    list.classList.add('todo-list')
    titleElement.classList.add('todo-list__title')
    deleteList.classList.add('todo-list__delete')
    editListTitle.classList.toggle('todo-list__edit-list-title--is-hidden')
    editListTitle.classList.add('todo-list__edit-list-title')
        newTitle.classList.add('todo-list__edit-list-title__new-title')
        editTitle.classList.add('todo-list__edit-list-title__edit')
    todos.classList.add('todo-list__todos')
    completedList.classList.add('todo-list__done')
    addTodoForm.classList.add('todo-list__add-todo')
        newTodo.classList.add('todo-list__add-todo__new-title')
        addTodo.classList.add('todo-list__add-todo__add')

    titleElement.innerText = title
    editTitle.innerText = '✏'
    addTodo.innerText = '➕'
    deleteList.innerText = '✖'
    newTitle.value = title
    newTodo.placeholder = 'Do the laundry...'
        
    // Event Listeners
    titleElement.addEventListener('click', function (e) {
        titleElement.classList.toggle('todo-list__title--is-hidden')
        editListTitle.classList.toggle('todo-list__edit-list-title--is-hidden')
        newTitle.value = e.target.innerText
        newTitle.focus()
    })

    deleteList.addEventListener('click', function (e) {
        if (confirm('Are you sure?')) list.remove();
    })

    editListTitle.addEventListener('submit', function (e) {
        e.preventDefault()
        titleElement.classList.toggle('todo-list__title--is-hidden')
        editListTitle.classList.toggle('todo-list__edit-list-title--is-hidden')
        if (newTitle.value.trim() === '') return
        titleElement.innerText = newTitle.value
    })

    addTodoForm.addEventListener('submit', function (e) {
        e.preventDefault()
        if (e.target.firstElementChild.value === '') return 
        todos.appendChild(Todo(e.target.firstElementChild.value))
        e.target.firstElementChild.value = ''
    })

    list.appendChild(titleElement)
    editListTitle.appendChild(newTitle)
    editListTitle.appendChild(editTitle)
    list.appendChild(editListTitle)
    list.appendChild(deleteList)
    addTodoForm.appendChild(newTodo)
    addTodoForm.appendChild(addTodo)
    list.appendChild(addTodoForm)
    list.appendChild(todos)
    list.appendChild(completedList)

    return list
}