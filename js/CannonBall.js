class CannonBall {
    constructor(x, y,r) 
    {
      var options = {
        isStatic: true
      };
      this.r = r;
      this.tanishq = Bodies.circle(x, y, this.r, options);
      this.image = loadImage("./assets/cannonball.png");
      this.trajectory=[]
      World.add(world, this.tanishq);
    }
     
  shoot() {
    var newAngle = cannon.angle - 28;
    newAngle = newAngle *(3.14/180)
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.tanishq, false);
    Matter.Body.setVelocity(this.tanishq, {
      x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
  }

      display() 
    {
      var angle =this.tanishq.angle
      var pos = this.tanishq.position;
      push();
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.r, this.r);
      pop();

       // Additional Activity
    if (this.tanishq.velocity.x > 0 && pos.x > 10) {
      var position = [pos.x, pos.y];
      this.trajectory.push(position);
    }

    for (var i = 0; i < this.trajectory.length; i++) {
      image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
    }

    }
  }