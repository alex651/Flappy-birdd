var bird;
var pipes = [];
var jumpSound;

let birdImg, pipeRevImg, pipeImg;

function preload() {
  birdImg = loadImage("banaan.png");
  backgroundImg = loadImage("achtergrond.jpg")
  pipeRevImg = loadImage("image.png")
  pipeImg = loadImage("pipe.png")
  jumpSound = loadSound("hop.wav")
  backgroundSound = loadSound("kahoot.mp3");
  dieSound = loadSound("die.mp3")
}

function setup() {
  createCanvas(400, 600);
  bird = new bird();
  pipes.push(new pipe());
  jumpSound.setVolume(0.4);
  backgroundSound.loop();
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

  if (pipes[i].hits(bird)) {
      strokeWeight(9);
      rectMode(CENTER);
      fill(255);
      playing = false;
      noLoop();
      dieSound.play();

    }
  }

}

function keyPressed(){
  if (key == ' ') {
    bird.up();
    jumpSound.play();

    //console.log("SPACE");

  }

}