// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// 2f6e631944d6f0a68cc4a2b3db2e0c96
const API_KEY = "2f6e631944d6f0a68cc4a2b3db2e0c96";

const onGeoOk = (position) => {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url)
	.then(res => res.json())
	.then(data => {
		const weather = document.querySelector("#weather span:first-child");
		const city = document.querySelector("#weather span:last-child");
		city.innerText = data.name;
		weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
	});
}

const onGeoError = () => {
	alert("cant find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
