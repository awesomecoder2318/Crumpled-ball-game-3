const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var paper1,ground,bin1,bin2,bin3;
var engine, world;
var ground1, edges;
var dusty
function preload()
{

}

function setup() {
    createCanvas(1000, 400);
    engine = Engine.create();
    world = engine.world;

  ground1 =new Ground(400,550,10000,10,)
 ground1.shapeColor=color(10,0,10)

 bin1=new Dustbin(800,320)
 paper1=new Paper(10,10);
 launcher = new Launcher(paper1.body,{x:200, y:100})

    Engine.run(engine);

}


function draw(){
  background(255,0,0);
  Engine.update(engine);

  paper1.display();
  ground1.display();
  bin1.display();

launcher.display();
 
}


function mouseDragged()
{
    Matter.Body.setPosition(paper1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
    launcher.fly();
}