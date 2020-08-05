var bullet,wall,thickness;
var speed,weight;
var damage;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
 bullet = createSprite(50, 200, 20, 20);
  bullet.shapeColor ="white";
  thickness = random(22,83);
 wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  
 
 // rectangle1.velocityY = -3;

}

function draw() {
  background(255,255,255);
  background("black");
  
  bullet.velocityX = speed;
 /* if(wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;
    if(deformation > 180){
      wall.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100){
      wall.shapeColor = color(230,230,0);
    }
    if(deformation < 100){
      wall.shapeColor = color(0,255,0);
    }
  }*/
  
  
  if(hascollided(bullet,wall))
  {
   bullet.velocityX = 0; 
    
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage>10)
    {
      wall.shapeColor = color(255,0,0);
  }
    if(damage<10)
    {
      wall.shapeColor = color(0,255,0);
  } 
  }
  drawSprites();
}

function hascollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
  return true
  }
  return false;
}
