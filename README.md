# hw3

1.What code draws the blades of grass?
 stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

2.What code makes the "lawnmower" come by? How often does it come by?
  if (random(1000) > 999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }

when there is a random number which shows up to be 1000 and 1000>999, then the lawnmower will appear

3.What's the point of the h variable?
determine the growing height of next grass，whenever the program draw, 

4.What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?
that line determine the angle of the grass，height-10-random(h) determines the range of Y height of the grass. -10 means x position minus 10 pixel to the left
