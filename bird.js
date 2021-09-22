function bird(){
  this.y = width/2;
  this.x = 25;
  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 16, 16);
  }
}