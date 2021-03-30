
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer1 , stone1;
var ground , rubber1;
var rubber2 , rubber3;

function preload()
{
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  hammer1 = new Iron(700,320,70,70);
  stone1 = new Stone (400,200,20,20);
  rubber1 = new Rubber(200,200,10,10);
  rubber2 = new Rubber(220,200,10,10);
  rubber3 = new Rubber(240,200,10,10);
  ground = new Ground(600,height,1200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  hammer1.display();
  stone1.display();
  rubber1.display();
  rubber2.display();
  rubber3.display();
  ground.display();
  drawSprites();
 
}



