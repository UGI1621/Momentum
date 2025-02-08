const loginForm = document.querySelector(".login-form");
const greeting = document.querySelector("#greeting")
const loginInput = loginForm.querySelector("input");
const todoDiv = document.querySelector("#todo_div");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

const onLoginSubmit = (e) => {
	e.preventDefault();
	const username = loginInput.value;
	console.log(username);
	loginForm.classList.toggle(HIDDEN_CLASSNAME);
	localStorage.setItem(USERNAME_KEY, username);
	greeting.innerText = `hello ${username}!`
	greeting.classList.toggle(HIDDEN_CLASSNAME);
	todoDiv.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	todoDiv.classList.add(HIDDEN_CLASSNAME);
} else {
	loginForm.classList.add(HIDDEN_CLASSNAME);
	greeting.innerText = `hello ${savedUsername}!`
	greeting.classList.remove(HIDDEN_CLASSNAME);
	todoDiv.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
