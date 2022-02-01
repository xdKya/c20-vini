//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var bola;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  //opcoes da bola
  var bola_options = {
      restitution: 1,
      frictionAir: 0.07
  }


  //criar o corpo fisico
  bola = Bodies.circle(200,100,30,bola_options);


  //adicione o corpo fisico ao mundo
  World.add(world,bola);
  console.log(bola)

}

function draw() {
  background("black");

  Engine.update(engine);

  //como a bola aparece na tela
  ellipseMode(RADIUS);
  ellipse(bola.position.x,bola.position.y,30);


}

