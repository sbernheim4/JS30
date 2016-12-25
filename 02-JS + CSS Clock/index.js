// get the html elements
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const audio = document.querySelector('.audio');

function setDate() {
	const now = new Date(); // get the current date

	const seconds = now.getSeconds(); // get the seconds
	const secondsDegrees = ((seconds / 60 * 360) + 90) % 360; // get the seconds degree value
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // rotate

	const minutes = now.getMinutes(); // get the minutes
	const minutesDegrees = ((minutes / 60 * 360) + 90) % 360; // get the hour degree value
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`; // rotate

	const hour = now.getHours(); // get the hour
	const hourDegrees = ((hour / 24 * 360) + 90) % 360; // get the hour degree value
	hourHand.style.transform = `rotate(${hourDegrees}deg)`; // rotate

	audio.currentTime = 0;
	audio.play();
}

setInterval(setDate, 1000);
