const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoList = document.querySelector(".todo-list");

const TO_DOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TO_DOS_KEY, JSON.stringify(toDos));
}

function showTodo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  todoList.appendChild(li);
  const addedTodo = document.createElement("span");
  addedTodo.classList.add("added-todo");
  li.appendChild(addedTodo);
  addedTodo.innerText = newToDoObj.text;
  const btnCheck = document.createElement("button");
  btnCheck.classList.add("todo__inner");
  li.prepend(btnCheck);
  const span = document.createElement("span");
  btnCheck.appendChild(span);
  const btnDelete = document.createElement("button");
  btnDelete.classList.add("todo-delete__btn");
  li.appendChild(btnDelete);
  const secondSpan = document.createElement("span");
  btnDelete.appendChild(secondSpan);
  btnDelete.addEventListener("click", deleteTodo);
}

function deleteTodo(event) {
  const li = document.querySelector("li");
  const buttonTag = document.querySelector(".todo-delete__btn");
  const clicked = event.currentTarget;
  clicked.parentElement.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newToDoObj);
  showTodo(newToDoObj);
  saveToDos();
}
todoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TO_DOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(showTodo);
}
