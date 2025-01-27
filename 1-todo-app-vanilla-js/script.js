document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoSubmit = document.querySelector(".todo-submit");
  const todoList = document.querySelector(".todo-list");
  let editMode = false;
  let editItem = null;
  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      if (editMode) {
        editItem.firstChild.textContent = todoText;
        editItem = null;
        editMode = false;
        todoSubmit.innerText = "Add to List";
        console.log(todoText);
      } else {
        addToList(todoText);
      }

      todoInput.value = "";
    } else {
      alert("Please enter the task to add");
    }
  });
  todoList.addEventListener("click", function (event) {
    const target = event.target;
    if (target.tagName === "BUTTON") {
      const todoItem = target.parentNode;
      if (target.innerText === "❌") {
        todoItem.remove();
      } else if (target.innerText === "🖊️") {
        editMode = true;
        editItem = todoItem;
        todoSubmit.innerText = "Edit Todo";
        todoInput.value = todoItem.firstChild.textContent;
        todoInput.focus();
      }
    }
  });
  function addToList(todoText) {
    const todoItem = document.createElement("li");
    const editButton = document.createElement("button");
    const removeButton = document.createElement("button");
    editButton.innerText = "🖊️";
    removeButton.innerText = "❌";
    const todoItemSpan = document.createElement("span");
    todoItemSpan.innerText = todoText;
    todoItem.appendChild(todoItemSpan);
    todoItem.appendChild(editButton);
    todoItem.appendChild(removeButton);
    todoList.appendChild(todoItem);
  }
});
