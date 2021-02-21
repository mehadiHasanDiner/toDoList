// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
todoButton.addEventListener("click", addTodo);
// delete and cheeked functionality of created ul list
todoList.addEventListener("click", deleteCheck);
// filter functionality 
filterOption.addEventListener('click', filterTodo);


// functions
function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault(); //[preventDefault() দিলে ফর্মের ডিফল্ট চেঞ্জ হয়।]

    // todo Div create
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // create li in todo Div
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // checked button create
    const completeButton = document.createElement("button");
    completeButton.innerHTML = `<i class="fas fa-check"></i>`;
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    // checked trash button create
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Append to List
    todoList.appendChild(todoDiv);

    // clear ToDo input Value.
    todoInput.value = "";

}

function deleteCheck(e) {
    const item = e.target;
    // delete todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }

    // check mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    })
}