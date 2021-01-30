//collision detection algorithm
/*var fixedRect, movingRect, gameObj1, gameObj2, gameObj3, gameObj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  gameObj1 = createSprite(100, 100, 50, 50);
  gameObj1.shapeColor = "green";

  gameObj2 = createSprite(200, 100, 50, 50);
  gameObj2.shapeColor = "green";

  gameObj3 = createSprite(300, 100, 50, 50);
  gameObj3.shapeColor = "green";

  gameObj4 = createSprite(400, 100, 50, 50);
  gameObj4.shapeColor = "green";
}

function draw() {
  background("black");  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(isTouching(movingRect, gameObj4)){
    gameObj4.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else if(isTouching(movingRect, gameObj2)){
    gameObj2.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    gameObj2.shapeColor = "green";
    gameObj4.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}

function isTouching(object1, object2){
  if(object1.x-object2.x < object1.width/2 + object2.width/2
    && object2.x-object1.x < object1.width/2 + object2.width/2
    && object1.y-object2.y < object1.height/2 + object2.height/2
    && object2.y-object1.y < object1.height/2 + object2.height/2){
    return true;
  }
  else{
    return false;
  }
}*/
//--------------------------------------------------------------------------------------------------------


//bounceOff algorithm
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = 5;
  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = -5;
}

function draw() {
  background("black");  

  console.log(movingRect.y - fixedRect.y);

  bounceOff(movingRect,fixedRect);

  drawSprites();
}

