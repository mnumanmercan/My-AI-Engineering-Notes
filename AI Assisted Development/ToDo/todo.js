// TODO app with add, remove, and list functionalities

// Array to store the to-do items
let todoList = [];

// Function to add a new item to the to-do list
function addTodo(item) {
    if (item) {
        todoList.push(item);
        console.log(`Added: "${item}"`);
    } else {
        console.log("Please provide a valid to-do item.");
    }
}

// Function to remove an item from the to-do list by index
function removeTodo(index) {
    if (index >= 0 && index < todoList.length) {
        const removedItem = todoList.splice(index, 1);
        console.log(`Removed: "${removedItem}"`);
    } else {
        console.log("Please provide a valid index.");
    }
}

// Function to list all items in the to-do list
function listTodos() {
    if (todoList.length === 0) {
        console.log("Your to-do list is empty.");
    } else {
        console.log("To-Do List:");
        todoList.forEach((item, index) => {
            console.log(`${index}: ${item}`);
        });
    }
}