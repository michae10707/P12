var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleImg, leafImage;
var leftBoundary,rightBoundary;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// setup background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//setup rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

//apple = createSprite(180,340,30,30);
//apple.scale =0.09;
//apple.addImage(appleImg);

// create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;
//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;

}


function draw() {
  background(0);
  
  //rabbit.collide(edges);
    rabbit.x= World.mouseX;
    edges= createEdgeSprites();
    rabbit.collide(edges[3]);
    rabbit.collide(leftBoundary);
    rabbit.collide(rightBoundary);
 
  var select_sprites =Math.round(random(1,2));
  if (frameCount % 80 ==0) {
    if (select_sprites == 1) {
      //call createApples function
      createApples();

    }
    else{
      //call createLeaves function
      createLeaves();
    }
  }

    



  drawSprites();
}

function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  //Add image to apple sprite
  apple.addImage(appleImg)

  //Scale the sprite if requried
  apple.scale = 0.06;
  //Give the velocity so that the apples move downwards
  apple.y = Math.round(random(10,60))
  apple.velocityY = 3;
  //give lifetime to the apple sprite
  apple.lifetime = 134
}

function createLeaves(){
  leaf = createSprite(random(250,350),40,10,10);
  //Add image to apple sprite
  leaf.addImage(leafImg);

  //Scale the sprite if requried
  leaf.scale = 0.05;
  //Give the velocity so that the apples move downwards
  leaf.y = Math.round(random(10,60))
  leaf.velocityY = 3;
  //give lifetime to the apple sprite
  leaf.lifetime = 134
}