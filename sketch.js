const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box3, box4, box5;
var aBird;
var box2;
var ground;
var Pig1, Pig2;
var log1, log2, log3, log4;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    box1 = new box(700,320,70,70);
    box2 = new box(920,320,70,70);
    Pig1 = new pig(810, 350, 50, 50);
    log1 = new Logs (810, 260, 20, PI/2);
 
    box3 = new box(700,240,70,70);
    box4 = new box(920,240,70,70);
    box5 = new box(810,160,70,70);
    Pig2 = new pig(810, 220, 50, 50);
    log2 = new Logs(810, 180,  20, PI/2);
    log3 = new log(760,120,150, PI/7);
    log4 = new log(870,120,150, -PI/7);

    aBird = new angryBird(100,100,50,50);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    aBird.display();
    Pig1.display();
    Pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
}