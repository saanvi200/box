var box1;
function setup() {
  createCanvas(500,500);
  box1 = createSprite(250,250,20,20);
  box1.shapeColor = "red";
  console.log("hello")
}

function draw() 
{
  background("lightblue");
  drawSprites();
if(keyDown("left")){
  box1.x = box1.x-2;
}
if(keyDown("right")){
  box1.x = box1.x+2;
}
if(keyDown("up")){
  box1.y = box1.y-2;
}
if(keyDown("down")){
  box1.y = box1.y+2;
}
}




