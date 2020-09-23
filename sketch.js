var swordImage;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;
var fruitImage1,fruitImage2,fruitImage3,fruitImage4;
var monsterImage;
var sword
var fruitGroup, enemyGroup;
var gameOverImage;
var swordSound;
var gameOverSound;
var position;
function preload(){
  
  
  swordImage = loadImage("sword.png");
  fruitImage1 = loadImage("fruit1.png");
  fruitImage2 = loadImage("fruit2.png");
  fruitImage3 = loadImage("fruit3.png");
  fruitImage4 = loadImage("fruit4.png");
  monsterImage = loadImage("alien1.png");
  gameOverImage = loadImage("gameover.png");
  swordSound = loadSound("knifeSwooshSound.mp3");
  gameOverSound = loadSound("gameover.mp3")
  
}

function setup()
{
  
  createCanvas(400,400);
  sword = createSprite(0,0,0,0);
  sword.addImage(swordImage);
  sword.scale = 0.7;
  enemyGroup = new Group();
  fruitGroup = new Group();
  
}




function draw(){
   
  background(255);
  
  text("score: "+ score,340,10 );
  
  
  
  if(gameState === PLAY){
     
     enemy();
     fruits();
  
     sword.y = World.mouseY;
     sword.x = World.mouseX;
    
    if(fruitGroup.isTouching(sword))
    {
      fruitGroup.destroyEach();
      swordSound.play();
      score++;
    }
    if(enemyGroup.isTouching(sword))
    {
      gameOverSound.play();
      gameState = END;
    }
  }else if(gameState === END){
           
           fruitGroup.destroyEach();
           enemyGroup.destroyEach();
           fruitGroup.setVelocityXeach = 0;
           enemyGroup.setVelocityXeach = 0;
    
           sword.x = 200;
           sword.y = 200;
           sword.addImage(gameOverImage);
  }
  
  drawSprites();
}


function fruits()
{
  if(World.frameCount % 80 === 0){
     position = Math.round(random(1,2))
     var fruit = createSprite(400,200,20,20);
    fruit.scale = 0.2;
    rand = Math.round(random (1,4))
     
    
    if(rand == 1){
       fruit.addImage(fruitImage1);
    } else if(rand == 2){
       fruit.addImage(fruitImage2);
    } else if(rand == 3){
       fruit.addImage(fruitImage3);
    } else if(rand == 4){
       fruit.addImage(fruitImage4);
    } 
    
    fruit.y = Math.round(random(50,340));
    
    if(position == 1)
    {
       fruit.x = 400;
      fruit.velocityX = -(7 + score/4);
      
    }else
    {
      if(position === 2){
         
         fruit.x = 0;
         fruit.velocityX =  ( 7 + score/4);
      }
    }
    
    
    
    fruit.setLifetime = 100;
    
    fruitGroup.add(fruit);
    
  }
}

function enemy()
{
  
  if(World.frameCount % 200 === 0){
     
     var monster = createSprite(400,200,20.20);
     monster.addAnimation("moveing",monsterImage);
     monster.y = Math.round(random(100,300));
     monster.velocityX = -(8 + score/10);
     monster.setLifetime = 80;
    
    
    enemyGroup.add(monster)
     
  }
  
  
  
  
  
  
  
}




















