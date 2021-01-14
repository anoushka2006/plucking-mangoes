
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground; 
var tree;
var stone;
var mango1, mango2, mango3, mango4, mango5;
var boy, boyImg;
var chain;

function preload() {
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground = new Ground(400,700,800,20);
	 tree = new Tree(600,460,300,500);

	 boy = createSprite(150,630,50,100);
	 boy.addImage(boyImg);
	 boy.scale = 0.1;

	 mango1 = new Mango(500,400,40,40);
	 mango2 = new Mango(550,350,40,40);
	 mango3 = new Mango(600,300,40,40);
	 mango4 = new Mango(650,400,40,40);
	 mango5 = new Mango(700,350,40,40);

	 stone = new Stone(235,420,40,40);

	 chain = new Chain(stone.body,{x:235, y:420})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  chain.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  
  
  drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mousereleased(){
	chain.fly();
}

function detectcollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:235, y:420})
		chain.attach(stone.body);
	}
}