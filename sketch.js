var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground, invisibleGround
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(50,250,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.09;
  

 ground = createSprite(200,270,400,10)
    ground.x = ground.width /2;

  invisibleGround = createSprite(200,270,400,10);
  invisibleGround.visible = false;
  
  FoodGroup = createGroup();
}


function draw() {
background(225);
  //stroke("white");
  //textSize(20);
  //fill("white");
  //text("Score" + score,500,50)
  monkey.velocityX =0;
  textSize(20);
  stroke("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);
  
  ground.velocityX = -4; 
  
  if (ground.x < 400){
      ground.x = ground.width/2;
    }
  monkey.collide(invisibleGround);
  
   if(keyDown("space") && monkey.y >= 237.369 ) {
     monkey.velocityY = -12;  
   }
  
   monkey.velocityY = monkey.velocityY + 0.8;
    
   
  
  //console.log(monkey.y);
  
 obstacles(); 
  banana();
  drawSprites();
}

function banana() {
  if(frameCount % 80 === 0) {
    var banana = createSprite(200,160,40,10);
    banana.addImage(bananaImage);
    banana.scale = 0.06 ;
    banana.y = Math.round(random(117,180));
    banana.velocityX = -3;
    banana.lifetime = 200;
    
     banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    FoodGroup.add(banana);
  }
}

function obstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(200,250,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.x = Math.round(random(180,185));
    obstacle.scale = 0.095;
    obstacle.velocityX = -3;
   obstacle.lifetime = 200;
  }
}




