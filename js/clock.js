const clock = document.querySelector("#clock");

const getClock = () => {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2,"0");
	const minutes = String(date.getMinutes()).padStart(2,"0");
	const year = String(date.getFullYear())
	const month = String(date.getMonth()).padStart(2,"0");
	const day = String(date.getDate()).padStart(2, "0");
	const second = date.getSeconds();

	clock.innerHTML = `
	<div class="clock flex fd-c a-c">
		${hours} : ${minutes}
	</div>
	<div class="date flex fd-c a-c">
		${year} / ${month} / ${day}
	</div>
	`;
}
getClock();

setInterval(getClock, 1000);
