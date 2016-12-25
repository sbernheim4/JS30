var inputs = document.querySelectorAll('.controls input');
function handleUpdate(){
	// get the appropriate suffix
	const suffix = this.dataset.sizing || '';
	// update the css variable by getting the variable name from the html element
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// add event listeners to each input element
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
