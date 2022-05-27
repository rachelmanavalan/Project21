
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var leftb;
var rightb;
var topb;

function preload()
{

	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	ground=new Ground (400,690,800,20);
	topb= new Ground (400,10,800,20);
	leftb= new Ground (10,400,20,800);
	rightb= new Ground (790,400,20,800);
	var ball_option= {
		restitution:0.9
	  }
	  ball=Bodies.circle(200,100,20,ball_option);
	  World.add(world, ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(51);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
 
}



