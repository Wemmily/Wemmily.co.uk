// 10PRINT
// https://www.youtube.com/watch?v=bEyTZ5ZZxZs

var x = 0;
var y = 0;
var spacing = 30;


function setup() {
	createCanvas(400, 400);
	background(0);

}

function draw() {
	stroke(255, y, x,);

	if(random(1)<0.5){
		line(x, y, x + spacing, y + spacing,)
	} else {
		line(x, y + spacing , x + spacing, y,)
	}
	x= x + spacing
	if (x > width) {
		x= 0;
		y= y+spacing;
	}
}