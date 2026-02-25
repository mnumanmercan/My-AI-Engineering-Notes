// TODO app with add, remove, and list functionalities

// Array to store the to-do items
let todoList = [];

// Function to add a new item to the to-do list and reflect the index.html file with using dom manipulation to display the updated list 
function addTodo() {
    const todoInput = document.getElementById('taskInput');
    const todoText = todoInput.value.trim();

    if (todoText) {
        // Add the new item to the list
        todoList.push(todoText);
        // Clear the input field
        todoInput.value = '';
        // Update the displayed list
        displayTodoList();
    }
}

// Function to remove an item from the to-do list based on its index and reflect the index.html file with using dom manipulation to display the updated list 
function removeTodo(index) {
    if (index >= 0 && index < todoList.length) {
        // Remove the item from the list
        todoList.splice(index, 1);
        // Update the displayed list
        displayTodoList();
    }
}

// Function to display the to-do list in the index.html file using DOM manipulation
function displayTodoList() {
    const todoContainer = document.getElementById('todoContainer');
    // Clear the existing list
    todoContainer.innerHTML = '';

    // Create a list item for each to-do item
    todoList.forEach((todo, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = todo;

        // Create a remove button for each item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeTodo(index);

        // Append the button to the list item and the item to the container
        listItem.appendChild(removeButton);
        todoContainer.appendChild(listItem);
    });
}

// Initial display of the to-do list
displayTodoList();  