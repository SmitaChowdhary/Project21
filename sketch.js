var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(20, 20, 50, 10);
  bullet.shapeColor="white";
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;
  wall=createSprite(1200,20,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  
}

function draw() {
  background("lightblue");  
  drawSprites();
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
      if(damage>10){
      wall.shapeColor=color(255,0,0);
      }
        if(damage<10){
        wall.shapeColor=color(0,255,0);
      }
    }
  }

  function hasCollided(object1,object2){
bulletRightEdge=object1.x+object1.width;
leftWallEdge=object2.x;
if(bulletRightEdge>=leftWallEdge){
  return true
}
else{
  return false
}
  }
