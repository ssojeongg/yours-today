const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const loginTitle = document.querySelector(".login-form h1");
const header = document.querySelector("header");

const USERNAME_KEY = "username";

function showUserinfo() {
  const username = localStorage.getItem(USERNAME_KEY);
  loginInput.parentNode.removeChild(loginInput);
  loginTitle.insertAdjacentHTML("afterbegin", "<span></span>");
  const userinfo = document.querySelector(".login-form h1 span");
  userinfo.innerText = `${username}`;
  showLogoutBtn();
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

function showLogoutBtn() {
  const logout = document.createElement("div");
  header.appendChild(logout);
  logout.classList.add("logout");
  const logoutIcon = document.createElement("i");
  logout.appendChild(logoutIcon);
  logoutIcon.classList.add("fa");
  logoutIcon.classList.add("fa-sign-out");
  logout.addEventListener("click", handleLogoutBtn);
}

const logoutBtn = document.querySelector(".logout");

function handleLogoutBtn(event) {
  if (savedUsername !== null) {
    logoutBtn.style.display = "none";
    localStorage.removeItem(USERNAME_KEY);
    const savedUserinfo = document.querySelector(".login-form h1 span");
    loginTitle.removeChild(savedUserinfo);
    loginTitle.prepend(loginInput);
  }
}
