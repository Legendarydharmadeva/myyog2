var rider, riderImage;
var happyRider;
var road;
var slantingroad;
var restart;


function preload(){
  riderImage = loadImage("Rider1.png");
  rider45Image = loadImage("rider -45.jpg");
  lineImage = loadImage("line.jpg");
}

function setup(){
  var canvas = createCanvas(1500,700);
  rider = createSprite(150,392);
  rider.addImage("rider",riderImage);
  rider.addImage("rider45",rider45Image);
  rider.velocityX = 0;
  rider.scale = 0.5;

  road = createSprite(650,490,1200,10);
  road.shapeColor = "black";

  slantingroad = createSprite(1250,490,10,10);
  slantingroad.visible = false;
}


function draw(){

  background("green");

  rider.velocityX = 0;

  fill("black");
  strokeWeight(10);
  line(1250,490,1600,190);

  if(keyDown("RIGHT_ARROW")){
    rider.velocityX = 4;
  }

  if(rider.isTouching(slantingroad)){
    rider.velocityX = 4;
    rider.velocityY = -3;
    rider.changeImage("rider45",rider45Image);
  }

  drawSprites();
}