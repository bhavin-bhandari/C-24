class Rubber {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y, width,  options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      stroke("black");
      strokeWeight(4);
      fill("blue");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };