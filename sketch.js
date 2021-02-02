const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
gameState = "onslinger";


function preload(){

}
function setup(){
    var canvas = createCanvas(1200,400);



    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(300,380,620,10);
    
    base = new Ground(220,250,210,20);
    
    block1 = new Box(290,225,30,40);
    
    block2 = new Box(260,225,30,40);
    block3 = new Box(230,225,30,40);
    block4 = new Box(200,225,30,40);
    block5 = new Box(170,225,30,40);
    
    block6 = new Box1(260,185,30,40);
    block7 = new Box1(230,185,30,40);
    block8 = new Box1(200,185,30,40);

    block9 = new Box2(230,145,30,40);


    polygon = new Polygon1(950,100,40,40);

    slinger = new Joint(polygon.body,{x:950,y:200});

    Engine.run(engine);
    
}
function draw(){
    background("black");
    Engine.update(engine);
    rectMode(CENTER);
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    ground.display();
    base.display();
    polygon.display();
    slinger.display();
    
}
function mouseDragged(){
    //if(gameState="onsling"){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
//}
}
function mouseReleased(){
    slinger.fly();
    gameState = "launched";
}
