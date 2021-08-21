var bgm;
var snow;
var snowImg;

function preload(){
bgm=loadImage("snow3.jpg")
snowImg=loadImage("snow5.webp")
}

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(bgm);
  spawnSnow();  
  drawSprites();

}
function spawnSnow(){
snow=createSprite(200,0,10,10);
snow.x=Math.round(random(0,800));
snow.velocityY=2;
snow.addImage(snowImg);
snow.scale=0.03;
}