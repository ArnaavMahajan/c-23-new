var block1,block2,ground,block4,block5,block6,block7,block8;

function setup() {
  createCanvas(1200,600);
 block1= rect(500, 300, 310, 210);
 block1.shapeColor="yellow";

 block2= rect(315, 285, 60, 240);
 block2.shapeColor="red";

 ground=rect(505,420,440,30);
 ground.shapeColor="green";

 block4=rect(690,285,70,240);
 block4.shapeColor="blue";

block5=rect(315,145,60,40);
block5.shapeColor="blue";

block6=rect(690,145,66,40);
block6.shapeColor="red";

block7=rect(500,135,50,120);
block7.shapeColor="green";

block8=rect(500,100,200,50);
block8.shapeColor="white";

}

function draw() {
text("The Magic Castle",490,90);

  background("pink");  
  drawSprites();
}