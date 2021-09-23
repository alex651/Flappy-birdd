var bird;
var pipes = [];

let birdImg;

function preload() {
  birdImg = loadImage("banaan.png");
  backgroundImg = loadImage("achtergrond.jpg")
}

function setup() {
  createCanvas(400, 600);
  bird = new bird();
  pipes.push(new pipe());
}

function draw() {
  background(backgroundImg);
  
  // draw bird
  bird.update();
  bird.show();

  if (frameCount % 75 == 0) {
    pipes.push(new pipe());
  }

for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

  }
}

function keyPressed(){
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");

  }

}