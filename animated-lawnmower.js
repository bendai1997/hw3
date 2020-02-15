var x = 0;
var h = 10;
var mowerx = 130;
// var mowery = 130;

function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
  // frameRate(20);
}

function draw() {

  fill(255);
  noStroke();
  rect(mowerx, 130, 200, 50);
  if (mowerx > width) {
    mowerx = -1000;
  }

  mowerx = mowerx + 4;

  stroke(random(60, 70), 100, 90);
  line(x, height - 10, x + random(-10, 10), height - 10 - random(50));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }


  fill(40, 100, 60);
  rect(0, height - 10, width, 10);
}
