const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var b1, b2, b3, b4, b5, b6, b6, b7, b8;
var b9, b10, b11, b12, b13, b14, b15, b16;
var b17, b18;
var pentagon, slinsghot, ground, base1, base2;
var mangoBodyPosition, stoneBodyPosition;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;


    ground = new Ground(600,690,1200,20);
    base1 = new Ground(990,255,190,15);
    base2 = new Ground(590,455,190,15);

    b1 = new Box(930,235);
    
    b2 = new Box(960,235);
    b3 = new Box(990,235);
    b4 = new Box(1020,235);
    b5 = new Box(1050,235);


    fill("red");
    b6= new Box(960,195);
    b7 = new Box(990,195);
    b8 = new Box(1020,195);

    b9 = new Box(990,155);

    b10 = new Box(530,435);
    b11 = new Box(560,435);
    b12 = new Box(590,435);
    b13 = new Box(620,435);
    b14 = new Box(650,435);

    b15 = new Box(560,395);
    b16 = new Box(590,395);
    b17 = new Box(620,395);

    b18 = new Box(590,355);



	pentagon = new Pentagon(160,265);
	slingshot = new Slingshot(pentagon.body,{x:160,y:265});

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");

  //keyPressed();

  
  
fill("black");  
ground.display();

fill("yellow");
base1.display();
base2.display();
fill("pink");
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
fill("lightblue");
b6.display();
b7.display();
b8.display();
fill("orange");
b9.display();
fill("pink");
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
fill("lightblue")
b15.display();
b16.display();
b17.display();
fill("orange")
b18.display();

pentagon.display();
slingshot.display();

//detectCollision(mango1, rock);
//detectCollision(mango2, rock);
//detectCollision(mango3, rock);
//detectCollision(mango4, rock);
//detectCollision(mango5, rock);



  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(pentagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


function detectCollision(lmango,lstone){

  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;


  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y );
   if(distance<=lmango.width + lstone.width){
	  
	Matter.Body.setStatic(lmango.body,false);

   }

}

function keyPressed(){
if(keyCode === 32){

  Matter.Body.setPosition(rock.body,{x:110, y: 565});
  boy.attach(rock.body);

}



}
