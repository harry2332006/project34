//Create variables here
var dog,dogimg,dogimg1,database;
var food,foodstock;
// var fedtime,lastfed,currentime;

function preload()
{
  dogimg=loadImage("images/dogImg.png");
  dogimg1=loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  database=firebase.database();

	createCanvas(500,500);
  dog=createSprite(250,300,150,150);
  dog.addImage(dogimg);
  dog.scale=0.15;
  foodstock=database.ref('Food');
  foodstock.on("value",readStock);
  textSize(20);

}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(food);
  dog.addImage(dogimg1);

}
  drawSprites();
  fill("red");
  stroke("balck");
  text("food remaining:"+ food,170,200);
  textSize(13);
  text("note:press up arrow key to feed the dog",130,10);


  //add styles here

}
function readStock(data){ 
  food=data.val(); }

  function writeStock(x){ 
  if(x<=0){ x=0; }
  else{ x=x-1; } 
  database.ref('/').update({ Food:x }) }

