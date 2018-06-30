export function listElement (title) {

    // Validation
    if (title === undefined || title === '') return null

    // Elements creation
    let list = document.createElement('div'),
        titleElement = document.createElement('h3'),
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
    newTitle.value = title
        
    // Event Listeners
    titleElement.addEventListener('click', function (e) {
        titleElement.style.display = 'none'
        editListTitle.style.display = 'initial'
        newTitle.value = e.target.innerText
        newTitle.focus()
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
        todos.appendChild(todoElement(e.target.firstElementChild.value))
        e.target.firstElementChild.value = ''
    })

    list.appendChild(titleElement)
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

export function todoElement (name) {

    // Validation against empty or undefined todo name
    if (name === undefined || name === '') return null

    // Creates sub-elements
    let todo = document.createElement('li'),
        check = document.createElement('input'),
        title = document.createElement('span'),
        editTodo = document.createElement('form'),
            editTodoInput = document.createElement('input'),
            editTodoSubmit = document.createElement('button'),
        remove = document.createElement('button')

    // Base element set up (classes, properties, etc)
    todo.classList.add('todo')
        check.classList.add('todo__do')
        title.classList.add('todo__title')
        editTodo.classList.add('todo__edit-todo-title')
        editTodo.classList.add('is-hidden')
            editTodoInput.classList.add('todo__edit-todo-title__title')
            editTodoInput.value = name
            editTodoSubmit.classList.add('todo__edit-todo-title__edit')
        remove.classList.add('todo__remove')
        editTodoSubmit.type = 'submit'
        editTodoSubmit.innerText = 'Edit'
        check.type = 'checkbox'
        title.innerText = name
        editTodo.type = 'text'
        remove.innerText = 'Delete'

    // Event-listeners

    // On change for checkbox append to list of completed todos
    check.addEventListener('change', function (e) {
        if (e.target.checked) {
            e.target.parentElement.parentElement.nextElementSibling.appendChild(e.target.parentElement)
        } else {
            e.target.parentElement.parentElement.previousElementSibling.appendChild(e.target.parentElement)
        }
    })


    // On click for todo show form
    title.addEventListener('click', function (e) {
        e.target.style.display = 'none'
        e.target.nextElementSibling.style.display = 'initial'
        e.target.nextElementSibling.firstElementChild.value = e.target.innerText
        e.target.nextElementSibling.firstElementChild.focus()
    })

    // On input blur hide form
    editTodoInput.addEventListener('blur', function (e) {
        e.target.parentElement.style.display = 'none'
        e.target.parentElement.previousElementSibling.style.display = 'initial'

        if (e.target.value === undefined || e.target.value === '') return

        e.target.parentElement.previousElementSibling.innerText = e.target.value
    })

    // On submit hide form
    editTodo.addEventListener('submit', function (e) {
        e.preventDefault()
        
        e.target.style.display = 'none'
        e.target.previousElementSibling.style.display = 'initial'

        if (
            e.target.firstElementChild.value === undefined ||
            e.target.firstElementChild.value.trim() === ''
        ) return

        e.target.previousElementSibling.innerText = e.target.firstElementChild.value
    })

    // Remove todo
    remove.addEventListener('click', function (e) {
        e.target.parentElement.remove()
    })

    editTodo.appendChild(editTodoInput)
    editTodo.appendChild(editTodoSubmit)
    todo.appendChild(check)
    todo.appendChild(title)
    todo.appendChild(editTodo)
    todo.appendChild(remove)

    return todo
}