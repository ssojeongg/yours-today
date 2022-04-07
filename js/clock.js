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
  let month = newDate.getMonth() + 1;
  if (month === 1) {
    month = "Jan";
  } else if (month === 2) {
    month = "Feb";
  } else if (month === 3) {
    month = "Mar";
  } else if (month === 4) {
    month = "Apr";
  } else if (month === 5) {
    month = "May";
  } else if (month === 6) {
    month = "Jun";
  } else if (month === 7) {
    month = "Jul";
  } else if (month === 8) {
    month = "Aug";
  } else if (month === 9) {
    month = "Sep";
  } else if (month === 10) {
    month = "Oct";
  } else if (month === 11) {
    month = "Nov";
  } else if (month === 12) {
    month = "Dec";
  }
  const date = newDate.getDate();
  let day = newDate.getDay();
  if (day === 0) {
    day = "Sun";
  } else if (day === 1) {
    day = "Mon";
  } else if (day === 2) {
    day = "Tue";
  } else if (day === 3) {
    day = "Wed";
  } else if (day === 4) {
    day = "Thu";
  } else if (day === 5) {
    day = "Fri";
  } else if (day === 6) {
    day = "Sat";
  }
  calendar.innerText = `${year} ${month} ${date}, ${day}`;
}
getDate();