var ballY = 0;
var ballX = 0;
var ballSpeedY = 5
var ballSpeedX = 8

function hitY() {
  ballY = ballY + ballSpeedY;

  if (ballY > height) {
    ballSpeedY = -ballSpeedY;
  }

  if (ballY < 0) {
    ballSpeedY = -ballSpeedY;
  }
}

function hitX() {
  ballX = ballX + ballSpeedX;

  if (ballX > width) {
    ballSpeedX = -ballSpeedX;
  }

  if (ballX < 0) {
    ballSpeedX = -ballSpeedX;
  }
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  ellipse(ballX, 100, 50);
  hitX();
  ellipse(ballX, 200, 50);
  hitX();
  ellipse(ballX, 300, 50);
  hitX();
  ellipse(100, ballY, 50);
  hitY();
  ellipse(200, ballY, 50);
  hitY();
  ellipse(300, ballY, 50);
  hitY();
  ellipse(400, ballY, 50);
  hitY();
  ellipse(500, ballY, 50);
  hitY();

}
