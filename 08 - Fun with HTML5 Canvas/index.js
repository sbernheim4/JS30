const canvas = document.querySelector('#draw');

const ctx = canvas.getContext('2d');

// set the width and height of the canvas to be the width and height of the browser
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// set the initial color and width of the line
ctx.strokeStyle = '#BADA55';
ctx.lineWidth = 1;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';

// variables used to modify the line's style / to draw the line correctly
let isDrawing = false;
let lastX;
let lastY;
let hue = 0;
let direction = true;

function draw(e) {
	// if isDrawing is false, then quit the function
	if (!isDrawing) return;

	// set the color of the line to be based on the variable hue
	ctx.strokeStyle = `hsl(${hue}, 100%, 60%)`;
	ctx.beginPath(); // draw the line
	ctx.moveTo(lastX, lastY); // beginning position

	ctx.lineTo(e.offsetX, e.offsetY); // ending position

	ctx.stroke(); //draw the line

	// update the last position of the coordinates
	lastX = e.offsetX;
	lastY = e.offsetY;

	// increase the hue going back to 0 when it hits 360 --> its limit
	hue = (hue + 1) % 360;

	// determine if the width should be increasing or decreasing
	if(ctx.lineWidth >= 60 || ctx.lineWidth <= 1) {
		direction = !direction;
	}

	// increase or decrease the width
	if (direction) {
		ctx.lineWidth++;
	} else {
		ctx.lineWidth--;
	}
}

// when the mouse is pressed down, get the mouse's position and update the lastX
// and lastY variables and set isDrawing to be true
canvas.addEventListener('mousedown', (e) => {
	lastX = e.offsetX;
	lastY = e.offsetY;
	isDrawing = true
});

// if the mouse leaves the page or is released, set isDrawing to be false
canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mouseup', () => isDrawing = false);

// when the mouse moves, run the draw function
canvas.addEventListener('mousemove', draw);
