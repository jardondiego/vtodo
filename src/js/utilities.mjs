export function createEmptyList (title) {

    // Validation
    if (title === undefined || title === '') return null

    // Sub-element creation
    let list = document.createElement('div'),
        completedList = document.createElement('ul'),
        todoList = document.createElement('ul'),
        addTodoList = document.createElement('form'),
        newTodo = document.createElement('input'),
        submit = document.createElement('button')

        list.classList.add('.todo-list')
        completedList.classList.add('.todo-list__list')
        todos.classList.add('.todo-list__completed')
        addTodoList.classList.add('.todo-list__')

}

export function createTodo (name) {

    // Validation against empty or undefined todo name
    if (name === undefined || name === '') return null

    // Creates sub-elements
    let todo = document.createElement('li'),
        check = document.createElement('input'),
        editTodo = document.createElement('form'),
            editTodoInput = document.createElement('input'),
            editTodoSubmit = document.createElement('button'),
        title = document.createElement('span'),
        remove = document.createElement('button')

    // Base element set up (classes, properties, etc)
    todo.classList.add('todo-list__todos__todo')
        check.classList.add('todo-list__todos__todo__do')
        title.classList.add('todo-list__todos__todo__title')
        editTodo.classList.add('todo-list__todos__todo__edit-title')
            editTodoInput.classList.add('todo-list__lits__todo__edit-title__title')
            editTodoInput.value = name
            editTodoSubmit.classList.add('todo-list__todos__todo__edit-title__edit')
        remove.classList.add('todo-list__todos__todo__remove')
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

        if (e.target.firstElementChild.value === undefined || e.target.firstElementChild.value === '') return
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
