const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var bob,sling;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,395,1200,10);
    box1 = new Box(1000,300,40,40);
    box2 = new Box(1000,285,40,40);
    box3 = new Box(1000,270,40,40);
    box4 = new Box(1000,255,40,40);
    box5 = new Box(1000,240,40,40);
    box6 = new Box(1000,225,40,40);
    box7 = new Box(1000,210,40,40);
    box8 = new Box(1000,195,40,40);

    bob = Bodies.circle(200,200,30);
    World.add(world,bob);

    sling = new SlingShot(bob,{x:800,y:200});
}

function draw(){
    //if(backgroundImg)
    background("black");
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    sling.display();

    fill("pink");
    ellipseMode(RADIUS);
    ellipse(bob.position.x,bob.position.y,30,30);

    mouseDragged();

}

function mouseDragged(){
    Matter.Body.setPosition(bob,{x:mouseX,y:mouseY});
}
