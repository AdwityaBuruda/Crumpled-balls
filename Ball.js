class Ball {
    constructor(x,y) {
      var options = {
          restitution : 0.4,
          density : 1
      }
      this.body = Bodies.circle(x,y,15,options);
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,30,30);
    }
    
  };
