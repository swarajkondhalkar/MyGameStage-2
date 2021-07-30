var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var pig, pigImage;

function preload(){
  backgroundImage =loadImage("images/bg.jpg")
  pigImage =loadImage("images/piggy.png")
  groundImage =loadImage("images/ground.jpg")
}

function setup() {
  canvas =createCanvas(1000, 500);
  ground = createSprite(0,450,1000,50);

  ground.addImage("ground",groundImage)
  ground.velocityX=-4;
  ground.x=ground.width/2;
  //console.log(ground.x)
  pig =createSprite( 50,400,100,100);
  pig.addImage(pigImage);
  pig.scale =0.25;
}

function draw() {
  background(backgroundImage);
  
  if(ground.x <0){
   ground.x =ground.width/4
  }
  drawSprites();
}



