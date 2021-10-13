var bird;
var pipes = [];
var jumpSound;
var gameState = 0; // 0 = menu, 1 = game, 2 = winMenu
let birdImg, pipeRevImg, pipeImg;
var score = 0;
function preload() {
  birdImg = loadImage("banaan.png");
  backgroundImg = loadImage("achtergrond.jpg")
  pipeRevImg = loadImage("image.png")
  pipeImg = loadImage("pipe.png")
  jumpSound = loadSound("hop.wav")
  backgroundSound = loadSound("kahoot.mp3");
  dieSound = loadSound("die.mp3")
  cheerSound = loadSound("cheer.mp3")
}

function setup() {
  createCanvas(400, 600);
  bird = new bird();
  pipes.push(new pipe());
  jumpSound.setVolume(0.4);
  backgroundSound.loop();
}

function draw(){
  text("gameState" + gameState, 25, 25);

  if (gameState == 0) {
    background(backgroundImg)
    textSize(35)
    fill("white")
    text("Press space to start", 50, 300) 
  }

  if (gameState == 1) {
    game();
  }

}

function game() {
  background(backgroundImg);
  // draw bird
  bird.update();
  bird.show();
  if (frameCount % 60 == 0) {
    pipes.push(new pipe());
    score = score + 1;
  }

for (var i = pipes.length - 2; i >= 0; i--) {
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
  text(score, 50, 50);
 
  if (score == 25) {
    playing = false;
    noLoop();
    cheerSound.play();
    winMenu();
  }
}

if (score == 1) {
    score += 1
}

function winMenu() {
  background(backgroundImg);
  textSize(35)
  fill("white")
  text("You won!!!", 100, 300)
  victoryGIF = createImg("dansendebanaan.gif");
  victoryGIF.position(70, 350)
}

function keyPressed(){
  if (key == ' ') {
    bird.up();
    jumpSound.play();
  }
console.log(keyCode);

  if (keyCode == 50) {
    gameState = 0;
  }

  if (keyCode == 32) {
    gameState = 1;
  }
}

