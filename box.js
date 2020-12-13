class Box {
    constructor(x, y) {
      var options = {

           isStatic: false,
          restitution:0,
          density:1.5, 
          friction:1.5
          
      }
      this.body = Bodies.rectangle(x, y, 30, 40, options);
      this.width = 30;
      this.height = 40;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
