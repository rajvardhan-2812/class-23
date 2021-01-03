const World = Matter.World;

const Engine = Matter.Engine;

const Bodies = Matter.Bodies;

var engine;
var world;
//var ground;
//var ball;
function setup() {
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);

engine =Engine.create();

world = engine.world;

box1 = new box(200,200,60,60); 

box2 = new box(240,100,40,40);

ground = new Ground(200,370,400,20)

/*var options={
  isStatic:true
}

ground = Bodies.rectangle(200,350,400,50,options);
World.add(world,ground)

var ball_options ={
  restitution:1.0
}

ball = Bodies.circle(200,100,20,ball_options)
World.add(world,ball)
*/
/*console.log();
console.log(object.type)
console.log(object.position.x)
console.log(object.position.y)

*/
}
function draw() {
  background(0);  
  Engine.update(engine)
 /* rectMode(CENTER)
  // rect(200,200,50,50)
  rect(ground.position.x,ground.position.y,400,20)
//ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40)
*/
box1.display();

box2.display();

ground.display();

} 







