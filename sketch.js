var xLocation= 100;
var yLocation= 100;
var xSpeed = 0
var ySpeed = 0

function setup() {
  createCanvas(600, 600);
}

function keyPressed() {
  if(keyCode == RIGHT_ARROW) {
    xSpeed = xSpeed + 1;
  }
  if(keyCode == UP_ARROW) {
    ySpeed = ySpeed - 1
  }
  if(keyCode == LEFT_ARROW) {
    xSpeed = xSpeed - 1
  }
  if(keyCode == DOWN_ARROW) {
    ySpeed = ySpeed - 1
  }
}
function draw() {
  background(0 ,255 ,0);
  fill(255 ,0 ,0);
  stroke(0 ,0, 255)
  strokeWeight(4);
    ellipse(xLocation, yLocation, 50, 50);

    xLocation = xLocation + xSpeed
    yLocation = yLocation + ySpeed

    textSize(18)
    strokeWeight(1)
    text(xSpeed, 100, 20);
  }
