var pig 
var pigImage
var pigwalk
var warthog
var corn
var grass
var deadpig


function preload() {
  pigImage = loadAnimation("pig.png")
bushImg = loadImage("bush.png")

 backgroundImg= loadImage("grass.jpg")
}
  
  function setup() {
  createCanvas(800,400);
  
  bg = createSprite(0,0,800,400)
  bg.addImage(backgroundImg);
bg.velocityX = -4
  pig = createSprite(400, 200, 50, 50);
  pig.addAnimation("running", pigImage)
pig.scale = 0.2
}

function draw() {
  background("grey");
 if (bg.X<0){
   bg.x = width/2
 }
 spawnbush()
  drawSprites();
}
function spawnbush(){
  if(frameCount%120 ===0){
var bush  = createSprite(600,Math.round(random(180,250)))
bush.velocityX = -5
  }
}