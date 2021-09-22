let bird;

let birdImg;

function preload() {
  birdImg = loadImage("banaan.png");
}


function setup() {
  createCanvas(400, 600);
  frameRate(40);
  bird = new Bird(width/3, height / 3);
  bird.flap();
}

 {
  // draw bird
  bird.show();
  bird.update();
 }