function Tank() {
  this.pos = createVector(width/2,height/2);
  this.speed = 5;
  this.heading = createVector(mouseX,mouseY);

  this.draw = function(){
    push();
    stroke(255);
    strokeWeight(4);
    noFill();
    rectMode(CENTER);
    rect(this.pos.x,this.pos.y,20,20);
    pop();
  }

  this.moveRight = function(){
    this.pos.x += this.speed;
  }
  this.moveLeft = function(){
    this.pos.x -= this.speed;
  }
  this.moveUp = function(){
    this.pos.y -= this.speed;
  }
  this.moveDown = function(){
    this.pos.y += this.speed;
  }

  this.cannon = function(){
    this.lenght = 20;
    this.cannonX = this.pos.x + ((mouseX - this.pos.x) / (sqrt(((mouseX - this.pos.x) * (mouseX - this.pos.x)) + ((mouseY - this.pos.y) * (mouseY - this.pos.y))) / this.lenght));
    this.cannonY = this.pos.y + ((mouseY - this.pos.y) / (sqrt(((mouseX - this.pos.x) * (mouseX - this.pos.x)) + ((mouseY - this.pos.y) * (mouseY - this.pos.y))) / this.lenght));
    stroke(255);
    strokeWeight(4);
    line(this.pos.x,this.pos.y,this.cannonX,this.cannonY)
  }

  this.render = function(){
    this.draw();
    this.cannon();
    Drive();

  }


}
