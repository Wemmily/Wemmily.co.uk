var bird;
var pipes = [];
var mic;
var sliderTop;
var sliderBottom;
var clapping = false;

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
   mic = new p5.AudioIn();
   mic.start();
   sliderTop = createSlider(0, 1, 0.5, 0.01, );
  sliderBottom = createSlider(0, 1, 0.1, 0.01, );
}

function draw() {
  background(0);

  var vol = mic.getLevel();

  console.log(vol);

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }


    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }


  }

  bird.update();
  bird.show();

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }

 if ( vol > sliderTop.value()&& !clapping) {
  bird.up();
  clapping = true ;

 }
 if(vol < sliderBottom.value()){
  clapping = false;
 }

fill(0,255,0);
var y = map(vol, 0, 1, height, 0,);
rect( width - 50, y, 50, height - y);

fill(255,0,255);
var y = map(sliderTop.value(), 0, 1, height, 0,);
rect( width - 50, y, 50, 4,);

fill(0,0,255);
var y = map(sliderBottom.value(), 0, 1, height, 0,);
rect( width - 50, y, 50, 4,);

}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}