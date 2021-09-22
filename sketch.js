var bird;
var pipes = [];
function setup() {
  createCanvas(400, 600);
  bird = new bird();
  pipes.push(new pipe());
}

function draw() {
  background(0);
  bird.update();
  bird.show();

  if (frameCount % 75 == 0) {
    pipes.push(new pipe());
  }

  for (var i = 0; i < pipes.length; i++) {
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