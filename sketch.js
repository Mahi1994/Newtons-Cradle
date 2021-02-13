const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var ground;
var rope,rope1,rope2,rope3,rope4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	

	stand=new Stand(400,200,230,30);
	
	bob1=new Bob(200,350,50);
	bob2=new Bob(300,350,50);
	bob3=new Bob(400,350,50);
	bob4=new Bob(500,350,50);
	bob5=new Bob(600,350,50);

	rope1=new Rope(bob1.body,stand.body,-100, 0)
	rope2=new Rope(bob2.body,stand.body,-50, 0)
	rope3=new Rope(bob3.body,stand.body,0, 0)
	rope4=new Rope(bob4.body,stand.body,50, 0)
	rope5=new Rope(bob5.body,stand.body,100, 0)
	
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
	Render.run(render);
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);

  background(100);

  stand.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
 rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()

}
function keyPressed(){
	if (keyDown(UP_ARROW)){
	Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-30,y:-40})
  
  }
  }
  

