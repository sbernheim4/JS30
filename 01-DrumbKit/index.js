window.addEventListener('keydown', function(e) {
	// get the audio element for the right key using the keyCode event
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	// only continue if a valid key with an associated audio file is pressed
	if(!audio) {
		return;
	}
	audio.currentTime = 0; // rewind to the start
	audio.play(); // play the audio file
	key.classList.add('playing');
});

