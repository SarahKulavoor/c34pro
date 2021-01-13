//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dog=loadImage("dogImg.png")
  happyDog=loadImage("dogImg1.png")
}

function setup() {
  database= firebase.database();
	createCanvas(500, 500);
  dog1= createSprite(200,200);
  dog1.addImage(dog)
  dog1.scale= 0.5
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  

  background("green")

if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog1.addImage(happyDog);
  dog1.scale= 0.5
}

  drawSprites();
  textSize(20)
  fill("white")
  text("press up arrow key to feed the dog", 50, 50)
  //add styles here

}
function readStock(data){
  foodS=data.val();
  
}
function writeStock(x){
  if (x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



