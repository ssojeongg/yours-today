const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const loginTitle = document.querySelector(".login-form h1");

const USERNAME_KEY = "username";

function showUserinfo() {
  const username = localStorage.getItem(USERNAME_KEY);
  loginInput.parentNode.removeChild(loginInput);
  loginTitle.insertAdjacentHTML("afterbegin", "<span></span>");
  const userinfo = document.querySelector(".login-form h1 span");
  userinfo.innerText = `${username}`;
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  showUserinfo();
}
loginForm.addEventListener("submit", handleLoginSubmit);


const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername !== null) {
  showUserinfo();
}