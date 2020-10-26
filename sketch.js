
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var mango1,mango2,mango3,mango4,mango5;
var stone;
var boy;
var chain;
var tree;

function setup() {
	createCanvas(1500, 1500);


	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(60,60);
	mango2=new Mango(80,80);
	mango3=new Mango(200,200);
	mango4=new Mango(400,150);
	mango5=new Mango(40,40);

	stone=new Stone(200,200);

	boy=new Boy(400,150,10,30);

	chain=new Chain(stone.body,{x:400,y:250});

	tree=new Tree(300,300,70,1000);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  tree.display();

  chain.display();

  boy.display();
  
  stone.display();

  mango1.display(); 
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(mango1,stone);
  detectCollision(mango2,stone);
  detectCollision(mango3,stone);
  detectCollision(mango4,stone);
  detectCollision(mango5,stone);

  drawSprites();

}

function keyPressed(){

	if(keyCode===32){

		Matter.body.setPosition(stone.body,{x:235,y:420});
		chain.attach(stone.body);


	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});

}

function mouseReleased(){
    
    chain.released();

}


 
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}
