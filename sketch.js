var movingrectangle, fixedrectangle


function setup() {
  createCanvas(800,400);
  movingrectangle = createSprite(400, 200, 50, 50);
  fixedrectangle = createSprite(300,200,50,50);
  movingrectangle.shapeColor="red";
  fixedrectangle.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  movingrectangle.x=mouseX;
  movingrectangle.y=mouseY;
  isTouching(movingrectangle,fixedrectangle)
  drawSprites();
}