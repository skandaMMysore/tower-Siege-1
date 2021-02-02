class Polygon1{
    constructor(x,y,diameter,height){
        var options={
            isStatic:true
        }
        this.image = loadImage("polygon.png");
        this.body = Bodies.circle(x,y,diameter,options);
        this.diameter = diameter/2;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.height,this.diameter);
            

    }
}