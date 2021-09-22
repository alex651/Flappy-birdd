class Bird {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 50;
    this.gravity = 2;
    this.velocity = 0;
    this.lift = -30;
    this.friction = 0.1;
    this.score = 0;
    this.up = false;
  }
 
 show() {
    fill(255);
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    if (this.up || this.velocity < 0) {
      rotate(-35);
    } else {
      rotate(35);
    }
    // ellipse(this.x, this.y, this.r);
    image(birdImg, 0, 0, this.r, this.r);
    pop();
  }