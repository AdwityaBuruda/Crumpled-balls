
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var binImage;

function preload()
{
binImage = loadImage("dustbingreen.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,690,800,10);
	bin1 = new Bin(700,675,100,10);
	bin2 = new Bin(650,650,10,50);
	bin3 = new Bin(750,650,10,50);
	ball = new Ball(200,675);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

    ground.display();
	bin1.display();
	bin2.display();
	bin3.display();
	ball.display();
	imageMode(CENTER);
	image(binImage,700,650,130,70);

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.positions,{x:25,y:-25});
	}
}

