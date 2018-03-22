var tank;
var lasers = [];

function setup() {
  createCanvas(800, 800);
  tank = new Tank();
}

function draw() {
  background(51);
  tank.render();

  for (var i = lasers.length - 1; i >= 0; i--) {
   lasers[i].render();
   lasers[i].update();
   if (lasers[i].offscreen()) {
     lasers.splice(i, 1);
   }
 }
}
function keyReleased() {

}

function keyPressed() {
  if (key == ' ') {
    lasers.push(new Laser(tank.pos, tank.heading));
  }
}

function Drive(){
  if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    tank.moveRight();
  }
  if(keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    tank.moveLeft();
  }
  if(keyIsDown(UP_ARROW) || keyIsDown(87)) {
    tank.moveUp();
  }
  if(keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    tank.moveDown();
  }
}
