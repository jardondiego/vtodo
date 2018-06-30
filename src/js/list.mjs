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
    editListTitle.classList.add('todo-list__edit-list-title')
    editListTitle.classList.add('is-hidden')
        newTitle.classList.add('todo-list__edit-list-title__new-title')
        editTitle.classList.add('todo-list__edit-list-title__edit')
    todos.classList.add('todo-list__todos')
    completedList.classList.add('todo-list__done')
    addTodoForm.classList.add('todo-list__add-todo')
        newTodo.classList.add('todo-list__add-todo__new-title')
        addTodo.classList.add('todo-list__add-todo__add')

    titleElement.innerText = title
    editTitle.innerText = 'Edit'
    addTodo.innerText = 'Add'
    deleteList.innerText = 'Delete'
    newTitle.value = title
        
    // Event Listeners
    titleElement.addEventListener('click', function (e) {
        titleElement.style.display = 'none'
        editListTitle.style.display = 'initial'
        newTitle.value = e.target.innerText
        newTitle.focus()
    })

    deleteList.addEventListener('click', function (e) {
        list.remove();
    })

    newTitle.addEventListener('blur', function (e) {
        editListTitle.style.display = 'none'
        titleElement.style.display = 'inline-block'
        if (newTitle.value === '') return
        titleElement.innerText = e.target.value
    })

    editListTitle.addEventListener('submit', function (e) {
        e.preventDefault()
        editListTitle.style.display = 'none'
        titleElement.style.display = 'inline-block'
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
    list.appendChild(deleteList)
    editListTitle.appendChild(newTitle)
    editListTitle.appendChild(editTitle)
    list.appendChild(editListTitle)
    addTodoForm.appendChild(newTodo)
    addTodoForm.appendChild(addTodo)
    list.appendChild(addTodoForm)
    list.appendChild(todos)
    list.appendChild(completedList)

    return list
}