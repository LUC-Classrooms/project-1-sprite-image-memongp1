/**
 * Project 1 - Interactive Tank
 * Name: patrick memong
 * Comments: This project uses basic shapes to draw a small tank with four wheels. The tank can be moved around the canvas using the mouse.
 */

// Global Variables go here
let tankX = 300; // x-coordinate of the tank
let tankY = 200; // y-coordinate of

function setup(){
  create (600, 400); // create a 600x400 pixel drawing canvas
}

function draw(){
  background(200); // light gray background

  // Move the origin to the center of the tank
  translate(tankX, tankY);

  // Draw the tank body
  fill(255, 204, 0); // orange
  rectMode(CENTER);
  rect(0, 0, 50, 50);

  // Draw the tank wheels
  fill(0); // black
  ellipse(25, 25, 15, 15);
  ellipse(-25, 25, 15, 15);
  ellipse(25, -25, 15, 15);
  ellipse(-25, -25, 15, 15);

  // Draw the tank turret
  fill(0, 0, 255); // blue
  rectMode(CENTER);
  rect(0, -25, 20, 50);

  // Draw the tank treads
  stroke(0);
  line(25, 25, 25, 75);
  line(-25, 25, -25, 75);

  // Move the tank with the mouse
  if (mouseIsPressed){
    tankX = mouseX;
    tankY = mouseY;
  }
}

function mousePressed(){
  // add code here if you want something to execute once each time the mouse is pressed
}