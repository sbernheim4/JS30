function playSound(e) {
	// get the audio element for the right key using the keyCode value on the event
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	// get the key element for the right key using the keyCode value on the event
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	// only continue if a valid key with an associated audio file is pressed
	if(!audio) return;
	audio.currentTime = 0; // rewind to the start
	audio.play(); // play the audio file
	key.classList.add('playing'); // add 'value' as a class on the element

}

function removeTransition(e) {
	this.classList.remove('playing');
}

// get all the html elements with the class key
const keys = document.querySelectorAll('.key');

// attach an event listener to each key for when the transition is done
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// add an event listener to the window for any key press
window.addEventListener('keydown', playSound);
