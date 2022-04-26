const clock = document.querySelector(".clock");
const calendar = document.querySelector(".date");

function getClock() {
  const newDate = new Date();
  const hours = String(newDate.getHours()).padStart(2, "0");
  const minutes = String(newDate.getMinutes()).padStart(2, "0");
  const seconds = String(newDate.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000)

function getDate() {
  const newDate = new Date();
  const year = newDate.getFullYear();
  let month = newDate.toLocaleString("en-US", { month:"short" });
  const date = newDate.getDate();
  let day = newDate.toLocaleString("en-US", { weekday:"short" });
  calendar.innerText = `${year} ${month} ${date}, ${day}`;
}
getDate();