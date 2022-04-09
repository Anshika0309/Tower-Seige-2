const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bird, slingshot,ground;
var stand1,stand2;
var block8,block9,block10,block11,block12,block13,block14,block15,block16;
var polygon;

function preload(){
    polygon_Img = loadImage("polygon.png");
}


function setup(){
createCanvas(900,400);
engine = Engine.create();
world = engine.world;

ground = new Ground();


stand1 = new Ground(390,300,250,10);
stand2 = new Ground(700,200,200,10);

//block1 = new Box(300,275,30,40);
block2 = new Box(330,275,30,40);
block3 = new Box(360,275,30,40);
block4 = new Box(390,275,30,40);
block5 = new Box(420,275,30,40);

block6 = new Box(450,275,30,40);
block7 = new Box(380,275,30,40);


block8 = new Box(330,235,30,40);
block9 = new Box(360,235,30,40);
block10 = new Box(390,235,30,40);
block11 = new Box(420,235,30,40);
block12 =new Box(450,235,30,40);

block13 = new Box(360,195,30,40);
block14 = new Box(390,195,30,40);
block15 = new Box(420,195,30,40);
block16 = new Box(390,155,30,40);


blocks1 = new Box(640,175,30,40);
blocks2 = new Box(670,175,30,40);
blocks3 = new Box(700,175,30,40);
blocks4 = new Box(730,175,30,40);
blocks5 = new Box(760,175,30,40);

blocks6 = new Box(670,135,30,40);
blocks7 = new Box(700,135,30,40);
blocks8 = new Box(730,135,30,40);
blocks9 = new Box(700,95,30,40);

//blocks10 = new Box(640,175,30,40);
//blocks11 = new Box(640,175,30,40);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot = new SlingShot(this.polygon,{x:100,y:200});

}

function draw(){
    background(54,44,44);
    text("Drag the polygon, to destroy the boxes", 300,13);
    text("Press space to get the polygon back to position",600,330);

    Engine.update(engine);
    stand1.display();
    stand2.display();
    ground.display();




//block1.display();  
fill("blue");  
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

fill("pink");
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
fill("turquoise");
block13.display();
block14.display();
block15.display();
fill("grey");
block16.display();
//block17.display();

fill("blue");
blocks1.display();

blocks2.display();
blocks3.display();
blocks4.display();
blocks5.display();
fill("pink");
blocks6.display();
blocks7.display();
blocks8.display();
fill("grey");
blocks9.display();
//blocks10.display();


imageMode(CENTER)
image(polygon_Img, polygon.position.x,polygon.position.y,40,40);
slingshot.display();
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    
}


function keyPressed(){
    if( keyCode === 32){
    
        slingshot.attach(polygon);
    }
}    
