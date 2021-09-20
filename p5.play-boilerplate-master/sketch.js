var rider, riderImg;
var bgImg, obstacleImg, coinImg;
var ground, obstacle, coin;
var monster,monsterImg;
var coinsGroup,monsterGroup,obstaclesGroup;
var score=0;
var lives=3;

function preload() {

  bgImg = loadImage("assets/Forest1.jpg");
  riderImg = loadAnimation("assets/giphy 1.png", "assets/giphy 2.png", "assets/giphy 3.png", "assets/giphy 4.png", "assets/giphy 4.png");
 obstacleImg = loadAnimation("assets/l0_obstacle01.png","assets/l0_obstacle02.png","assets/l0_obstacle03.png","assets/l0_obstacle04.png","assets/l0_obstacle05.png","assets/l0_obstacle06.png","assets/l0_obstacle07.png","assets/l0_obstacle08.png","assets/l0_obstacle09.png","assets/l0_obstacle10.png","assets/l0_obstacle11.png","assets/l0_obstacle12.png",);
  coinImg = loadAnimation("assets/coin1.png", "assets/coin2.png", "assets/coin3.png", "assets/coin4.png", "assets/coin5.png", "assets/coin6.png", "assets/coin7.png", "assets/coin8.png", "assets/coin9.png", "assets/coin10.png", "assets/coin11.png", "assets/coin12.png");
  monsterImg=loadAnimation("assets/warrior1.png","assets/warrior2.png","assets/warrior3.png","assets/warrior4.png","assets/warrior5.png","assets/warrior6.png","assets/warrior7.png","assets/warrior8.png","assets/warrior9.png","assets/warrior10.png","assets/warrior11.png","assets/warrior12.png");
}
function setup() {
  createCanvas(800, 400);
  bg = createSprite(250,130,300, 200);
  bg.addImage(bgImg);
  bg.scale = 0.7;
 // bg.velocityX = -4;
//  bg.x = bg.width / 4;


  rider = createSprite(70, 320, 20, 50);
  rider.addAnimation("abc", riderImg);
  ground = createSprite(200, 380, 800, 10);
  ground.visible = false;
  rider.debug=true;
  rider.setCollider("circle",0,0,20);

  coinsGroup=new Group();
  monsterGroup=new Group();
  obstaclesGroup=new Group();
}

function draw() {
  background("lightblue");
  drawSprites();

  textSize(20);
  text(mouseX + "," + mouseY, mouseX, mouseY);
  text("score:"+ score,350,70); 
  text("lives:"+ lives,30,30);

  if (keyDown("UP_ARROW")) {
    rider.velocityY = -10;
  }
  if(coinsGroup.isTouching(rider)){
    score=score+1;
  }
  if(monsterGroup.isTouching(rider)||obstaclesGroup.isTouching(rider)){
    lives=lives-1;
  }


 // if (bg.x < 0) {
 //bg.x = bg.width/16;
    
  //}
 spawnObstacles();
  spawnCoins();
  spawnMonster();
  rider.velocityY = rider.velocityY + 0.8;
  rider.collide(ground);

}

function spawnObstacles() {
  if (frameCount % 150 === 0) {
    obstacle = createSprite(810, 360, 10, 10);
    obstacle.velocityX = -5;
    obstacle.addAnimation("ehi",obstacleImg);
    obstacle.scale = 0.2;
    obstaclesGroup.add(obstacle)
  }
}

function spawnCoins() {
  if (frameCount % 200 === 0) {
    coin = createSprite(810, random(220, 320), 10, 10);
    coin.velocityX = -2;
    coin.addAnimation("bcd", coinImg);
    coin.scale = 0.4;
    coinsGroup.add(coin)
  }
}

function spawnMonster(){
  if(frameCount%250 ===0){
    monster=createSprite(810,300,10,10);
    monster.velocityX=-3;
    monster.addAnimation("cde",monsterImg);
    monster.scale=0.8
    monsterGroup.add(monster);
  }
}