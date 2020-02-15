function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;

function draw() {
  fill(40, 100, 60);
  rect(0, height-10, width, 10);

  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  if (random(h) >50) {
 noStroke();
  fill(random(200,255), random(30,60), random(100,175));
  ellipse(random(0,400), random(150,200), random(5, 10));
}
}

