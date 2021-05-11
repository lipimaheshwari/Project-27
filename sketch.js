
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof=new Roof(400,250,230,20);
	bob1 = new Bob(320,575,40,"purple")
	bob2 = new Bob(360,575,40,"blue")
	bob3 = new Bob(400,575,40,"green")
	bob4 = new Bob(440,575,40,"yellow")
	bob5 = new Bob(480,575,40,"red")
	
	
	rope1=new Rope(bob1.body,roof.body,-80, 0)
	rope2=new Rope(bob2.body,roof.body,-40, 0)
	rope3=new Rope(bob3.body,roof.body,0, 0)
	rope4=new Rope(bob4.body,roof.body,40, 0)
	rope5=new Rope(bob5.body,roof.body,80, 0)
	Engine.run(engine);
  
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
	
		 Matter.Body.applyForce(bob1.body,bob1.body.position,
								{x:-50,y:-45});
	
		  }
	}

function draw() {
  rectMode(CENTER);
  background(230);
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



