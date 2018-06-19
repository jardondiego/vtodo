# Schema

Todo List 
* List Title
* Edit List Title  
    * New List Title
    * Edit Button
* Add Todo Form
    * New Todo Title
    * Add Button
* Todos  
    * Todo
        * Check Todo Checkbox
        * Todo Title
        * Edit Todo Title Form
            * New Todo Title
            * Edit Todo Button
        * Delete Todo Button
* Completed

```jade
div.todo-list
    h2.todo-list__title
    form.todo-list__edit-list-title
        input.todo-list__edit-list-title__new-title
        button.todo-list__edit-list-title__edit
    ul.todo-list__todos
        li.todo
            input.todo__do
            span.todo__title
            form.todo__edit-todo-title
                input.todo__edit-todo-title__new-title
                button.todo__edit-todo-title__edit
            button.todo__remove
    ul.todo-list__completed
        li.todo
            input.todo__do
            span.todo__title
            form.todo__edit-todo-title
                input.todo__edit-todo-title__new-title
                button.todo__edit-todo-title__edit
            button.todo__remove
```