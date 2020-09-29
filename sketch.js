var fixedRectangle
var movingRectangle

function setup() {
  createCanvas(1200,800);
  fixedRectangle=createSprite(600, 400, 50, 80);
  movingRectangle=createSprite(400,200,80,30);
  fixedRectangle.shapeColor="blue";
  movingRectangle.shapeColor="purple";
}

function draw() {
  background(0,0,0);  
  movingRectangle.x=World.mouseX;
  movingRectangle.y=World.mouseY;
  if(movingRectangle.x-fixedRectangle.x<fixedRectangle.width/2+movingRectangle.width/2
    &&fixedRectangle.x-movingRectangle.x<fixedRectangle.width/2+movingRectangle.width/2
    &&movingRectangle.y-fixedRectangle.y<fixedRectangle.width/2+movingRectangle.width/2
    &&fixedRectangle.y-movingRectangle.y<fixedRectangle.width/2+movingRectangle.width/2){
    movingRectangle.shapeColor="yellow";
    fixedRectangle.shapeColor="green";
  }
  else{
    fixedRectangle.shapeColor="blue";
    movingRectangle.shapeColor="purple";  
  }
  drawSprites();
}
