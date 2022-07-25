const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.bodies;
const Constraint = Matter.constraint;
const Body = Matter.body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground, bridge;
var jointPoint;
var jointLink;

var stones = [];

function setup() {
createCanvas( windowWidth, windowHeight);
engine = Engine.create();
world = engine.world;
frameRate(80);

ground = new Base(0, height - 10, width * 2, 20, "#0ac2bc", true);
leftWall = new Base(300, height / 2 + 50, 600, 100, "#a089b3", true);
rightWall = new Base(300, height / 2 + 50, 600, 100, "#cfe376", true);

bridge = new bridge(15, { x: width / 2 - 400, y: height / 2 });
jointPoint = new Base(width - 600, height / 2 + 10, 40, 20, "#ff0000");

for (var i = 0; i <= 8; i++) {
  var x = random(width / 2 - 200, width / 2 + 300);
  var y = random(-10, 140);
  var stone = new Stone(x, y, 80, 80);
  stones.push(stone);
  }
}

function draw () {
  background(29);
  Engine.update(engine);
  ground.show();
  bridge.show();
  leftWall.show();
  rightWall.show();

  for (var stone of stones) {
    stone.show();
  }
}