const toDoForm = document.getElementById("todo-form");
const toDoinput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="toDos"
let toDos = [];

const saveToDos = () => {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

const deleteToDo = (event) => {
	const li = event.target.parentElement;
	toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
	saveToDos();
	li.remove();
}

const paintToDo = (newTodo) => {
	const div = document.createElement("div");
	div.id = newTodo.id;
	div.classList.add("todo-item");
	const span = document.createElement("span");
	span.innerText = newTodo.text;
	const button = document.createElement("button");
	button.innerText = "❌";
	button.addEventListener("click",deleteToDo);
	div.appendChild(span);
	div.appendChild(button);
	toDoList.appendChild(div);
}


const handleToDoSubmit = (event) => {
	event.preventDefault();
	const newTodo = toDoinput.value;
	toDoinput.value = "";
	const newTodoObj = {
		text:newTodo,
		id :Date.now(),
	}
	toDos.push(newTodoObj);
	paintToDo(newTodoObj);
	saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(paintToDo);
}
