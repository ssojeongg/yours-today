const API_KEY = "160519fea400d9087fc00fb0ab2bbaa6";

function getGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const weather = document.querySelector(".weather");
    weather.innerText = `${data.name} = ${data.weather[0].main}, ${data.main.temp}˚C`;
  });
}
function getGeoErr() {
  alert("위치 정보를 불러올 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(getGeoSuccess, getGeoErr);