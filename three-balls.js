var ballY = 0;
var ballSpeed = 3;

var ballX = 0;
var ballSpeed = 8;

var ballX2 = 0;
var ballSpeed2 = 5;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  ellipse(300, ballY, 50);

  ballY = ballY + ballSpeed;
  
  if (ballY > height) {
    ballSpeed = -ballSpeed;
  }
  
  if (ballY < 0) {
    ballSpeed = -ballSpeed;
  }
  
  ellipse(ballX, 100, 50);
  ellipse(ballX2, 200, 50);

  ballX = ballX + ballSpeed;
  ballX2 = ballX2 + ballSpeed2;
  
  // bounce the first ball
  if (ballX > width) {
    ballSpeed = -ballSpeed;
  }
  
  if (ballX == 0) {
    ballSpeed = -ballSpeed;
  }
  
  // bounce the second ball
  if (ballX2 > width) {
    ballSpeed2 = -ballSpeed2;
  }
  
  if (ballX2 == 0) {
    ballSpeed2 = -ballSpeed2;
  }
}
