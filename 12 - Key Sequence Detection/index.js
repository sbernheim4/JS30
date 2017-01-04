window.addEventListener('keyup', recordKey);

secretKey = 'asd';

var keys = [];
function recordKey(e) {
	keys.push(e.key);
	keys.splice(secretKey.legnth, keys.length - secretKey.length);

	var value = "";

	keys.forEach(letter => {
		value+=letter;
	});

	if (value === secretKey) {
		const html = document.querySelector('.secret-message');
		html.innerHTML = 'CONGRATS, You got the secret key';
	}
}
