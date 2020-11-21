var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,800);
  speed=random(55,90);
  weight=random(480,1500);

  car=createSprite(50,100,50,50);
  car.shapeColor="pink";
  wall=createSprite(750,10,10,height/2);
  wall.shapeColor=(80,80,80);
  
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*width*height*speed*speed/22509;

    if(deformation<180){
      car.shapeColor="green";
          }
    if (deformation<180 && deformation>100){
      car.shapeColor="yellow"      
    }
    if(deformation<100){
      car.shapeColor="red";
          }
  }
 
  drawSprites();


}