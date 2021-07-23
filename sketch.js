const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//creating variables 
var ball1;

function setup() {

  //setting the canvas
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;

  //creating the sprites
  ball1 = new Ball(200,200,20,20);

  Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ball1.display();
  drawSprites();
}