var bird;
var pipes = [];

let birdImg, pipeRevImg, pipeImg;

function preload() {
  birdImg = loadImage("banaan.png");
  backgroundImg = loadImage("achtergrond.jpg")
  pipeRevImg = loadImage("image.png")
  pipeImg = loadImage("pipe.png")
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

  if (frameCount % 100 == 0) {
    pipes.push(new pipe());
  }

for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

  if (pipes[i].hits(bird)) {
      strokeWeight(9);
      rectMode(CENTER);
      fill(255);
      playing = false;
      noLoop();
    }
  }

}

function keyPressed(){
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");

  }

}