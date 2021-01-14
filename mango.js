class Mango { 
    constructor(x,y,radius) {
    var options = {
        isStatic: true,
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.image = loadImage("mango.png");
    World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(this.body.positionx, this.body.position.y);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius, this.radius);
        pop();
    }
}