var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var body1,body2,body3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	body1Sprite=createSprite(width/2,650,200,20);
	body1Sprite.shapeColor=color("red");

	body2Sprite=createSprite(510,610,20,100);
	body2Sprite.shapeColor=color("red");

	body3Sprite=createSprite(300,610,20,100);
	body3Sprite.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.0,density:2, isStatic:true});
	World.add(world, packageBody);

	body1Sprite = Bodies.rectangle(width/2 , 640 ,width, 10 , {restitution:3.0,density:3, isStatic:true});
	World.add(world, body1Sprite);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
 
 
  drawSprites();
 

 
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	packageSprite.x=packageBody.position.x
	packageSprite.y=packageBody.position.y
	Matter.Body.setStatic(packageBody,false);
  }

}



