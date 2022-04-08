const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoList = document.querySelector(".todo-list");

function showTodo(newTodo) {
  const li = document.createElement("li");
  todoList.appendChild(li);
  const addedTodo = document.createElement("span");
  addedTodo.classList.add("added-todo");
  li.appendChild(addedTodo);
  addedTodo.innerText = newTodo;
  const btnCheck = document.createElement("button");
  btnCheck.classList.add("todo-finish__btn");
  li.prepend(btnCheck);
  const firstSpan = document.createElement("span");
  btnCheck.appendChild(firstSpan);
  btnCheck.addEventListener("click", checkTodo);
  const btnDelete = document.createElement("button");
  btnDelete.classList.add("todo-delete__btn");
  li.appendChild(btnDelete);
  const secondSpan = document.createElement("span");
  btnDelete.appendChild(secondSpan);
  btnDelete.addEventListener("click", deleteTodo);
}

function checkTodo(event) {
  const btnCheck = document.querySelector(".todo-finish__btn span");
  const addedTodo = document.querySelector(".added-todo");
  const linedClass = "todo-finish__lined";
  const checkedClass = "todo-finish__checked";
  btnCheck.classList.add(checkedClass);
  addedTodo.classList.add(linedClass);
}

function deleteTodo(event) {
  const buttonTag = document.querySelector(".todo-delete__btn");
  const clicked = event.target.parentElement;
  if (clicked === buttonTag) {
    clicked.parentElement.remove();
  }
}


function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  showTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);