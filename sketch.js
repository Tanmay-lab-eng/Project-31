const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;



function setup() {
  var canvas  = createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

   
   ground1 = new ground(200,790,600,20);
   
}

function draw() {
  background("black");  
  drawSprites();

  ground1.display();
}
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10, width/2+10), 0,10));
}

for (var k = 0; k <= width; k = k+ 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for (j = 0; j < particles.length; j++) {

  particles[j].display();
}
for (k = 0; k < particles.length; k++) {

  particles[k].display();
}