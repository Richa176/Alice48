let ground,wall1;
let lander;
var diver_img;
var bg_img,i=0;
var weed1_img;
var Sophia;
var vx = 0;
var g = 0.05;
var vy = 0;
var pearl,count=1;
var pearlimj;
var shl1;
var shl2;
var shl3,x=180,y=170;
var shl1_img;
var fish2_img,x1=680,y1=450,x2=1050,y2=170,x3=480,y3=280;
var fish1_img,shl1Grp,shl2Grp,shl3Grp,shl4Grp;
var score = 0;
var fishhr;
var fishob;
function preload()
{
  diver_img = loadAnimation("diver1.png","diver1.2.png","diver2.png","diver2.2.png","diver3.png","diver3.2.png","diver4.png","diver5.png","diver6.png");
  
  bg_img = loadImage("bg.jpg");

  weed_img = loadImage("seaweed2.png");

  weed_imgh = loadImage("seaweedH2.png");

  pearlimj = loadImage("cshell.png");

  shl1_img = loadImage("s1.png");

  fish1_img = loadAnimation("ob1.png","ob2.png","ob03.png");

  fish2_img = loadAnimation("on1.png","on2.png","ob3.png");
  // shl2_img = loadImage("p2.png");

  // shl3_img = loadImage("p3.png");



}

function setup() {
  createCanvas(windowWidth,windowHeight);

 Sophia=createSprite(100,500,15,15);
  Sophia.addAnimation("dvr",diver_img);
  Sophia.scale=0.7;

  pearl=createSprite(1300,130,15,15);
 pearl.addImage(pearlimj);
 pearl.scale=0.3;
  
 fishhr=createSprite(1300,130,15,15);
 fishhr.addAnimation("fsh",fish1_img);
 fishhr.scale=0.3;
 
 shl1Grp= new Group();
 shl2Grp= new Group();
 shl3Grp= new Group();
 shl4Grp= new Group();

  for(var s=1;s<=5;s++){
    shl1=createSprite(x,y,15,15);
    shl1.addAnimation("shelll",shl1_img);//sh1[s]
    shl1.scale=0.1;
    x+=150;
    shl1Grp.add(shl1);
  }

  for(var s=1;s<=3;s++){
    shl2=createSprite(x1,y1,15,15);
    shl2.addAnimation("shelll",shl1_img);
    shl2.scale=0.1;
    x1+=150;
    shl1Grp.add(shl2);
  }

  for(var s=1;s<=2;s++){
    shl3=createSprite(x2,y2,15,15);
    shl3.addAnimation("shelll",shl1_img);
    shl3.scale=0.1;
    y2+=150;
    shl1Grp.add(shl3);
  }

  for(var s=1;s<=2;s++){
    shl4=createSprite(x3,y3,15,15);
    shl4.addAnimation("shelll",shl1_img);//sh1[s]
    shl4.scale=0.1;
    y3+=150;
    shl1Grp.add(shl4);
  }

 
//   shl1=createSprite(700,460,15,15);
//  shl1.addAnimation("shelll",shl1_img);
//   shl1.scale=0.1;

//   shl1=createSprite(700,460,15,15);
//  shl1.addAnimation("shelll",shl1_img);
//   shl1.scale=0.1;

//   shl1=createSprite(700,460,15,15);
//  shl1.addAnimation("shelll",shl1_img);
//   shl1.scale=0.1;

//  shl2=createSprite(310,300,15,15);
//  shl2.addImage("shell",shl_img);
//  shl2.scale=0.3;

//   shl3=createSprite(900,480,15,15);
//   shl3.addImage("shel",shl3_img);
//   shl3.scale=0.12;
  
  

  wall2=createSprite(940,290,20,100);
  wall2.addImage(weed_img);
  wall2.scale=0.2;

  
  
   wall4=createSprite(580,340,90,20);
  //wall4.shapeColor="blue";
  wall4.addImage(weed_img);
  wall4.scale=0.2;

   walll4=createSprite(570,480,90,20);
  
  walll4.addImage(weed_img);
  walll4.scale=0.2;
  
  wall5=createSprite(220,320,20,120);
   wall5.addImage(weed_img);
  wall5.scale=0.2;

  // var wall5l=createSprite(770,470,20,120);
  // wall5l.addImage(weed_img);
  // wall5l.scale=0.3;

   wall1=createSprite(180,90,200,20);
  wall1.addImage(weed_imgh);
  wall1.scale=0.18;

  wall1.debug=true;

  wall3=createSprite(400,90,150,20);
  wall3.addImage(weed_imgh);
  wall3.scale=0.18;

  
   wall5ll=createSprite(60,180,20,110);
   wall5ll.addImage(weed_img);
   wall5ll.scale=0.3;

  //  var wall5ll1=createSprite(900,120,20,110);
  //  wall5ll1.addImage(weed_img);
  //  wall5ll1.scale=0.3;

  //  var wall5ll01=createSprite(460,410,110,20);
  //  wall5ll01.addImage(weed_imgh);
  //  wall5ll01.scale=0.3;

  //  var wall02=createSprite(480,80,110,20);
  //  wall02.addImage(weed_imgh);
  //  wall02.scale=0.3;

   wall01=createSprite(1050,600,110,20);
   wall01.addImage(weed_imgh);
   wall01.scale=0.18;

   wall12=createSprite(610,95,130,20);
  wall12.addImage(weed_imgh);
  wall12.scale=0.16;

 wall5l6l=createSprite(130,590,120,20);
  wall5l6l.addImage(weed_imgh);
 wall5l6l.scale=0.18;

 wall5l7l=createSprite(340,595,120,20);
  wall5l7l.addImage(weed_imgh);
 wall5l7l.scale=0.16;

 wall7=createSprite(520,590,200,20);
  wall7.addImage(weed_imgh);
  wall7.scale=0.15;

  wall007=createSprite(300,270,200,20);
  wall007.addImage(weed_imgh);
  wall007.scale=0.1;

//  var wall5l8l=createSprite(430,580,120,20);
//   wall5l8l.addImage(weed_imgh);
//  wall5l8l.scale=0.2;

 wall06=createSprite(1160,340,20,120);
  wall06.addImage(weed_img);
 wall06.scale=0.25;

//  var wall006=createSprite(720,170,20,120);
//   wall006.addImage(weed_img);
//  wall006.scale=0.25;

 wall07=createSprite(1160,500,20,120);
  wall07.addImage(weed_img);
 wall07.scale=0.25;

 wall08=createSprite(870,370,120,20);
 wall08.addImage(weed_imgh);
wall08.scale=0.11;


  
  
  wall8=createSprite(290,400,130,20);
  wall8.addImage(weed_imgh);
  wall8.scale=0.12;

  wall008=createSprite(1090,70,130,20);
  wall008.addImage(weed_imgh);
  wall008.scale=0.19;
  
  wall008=createSprite(720,540,130,20);
  wall008.addImage(weed_imgh);
  wall008.scale=0.19;
  
  wall9=createSprite(950,135,20,100);
  wall9.addImage(weed_img);
  wall9.scale=0.24;
  
  // var wall10=createSprite(700,400,40,90);
  // wall10.shapeColor="yellow";
  
  // var wall11=createSprite(770,330,20,120);
  // wall11.addImage(weed_img);
  // wall11.scale=0.3;
  
  

 // rectMode(CENTER);
  
  
}

function draw() 
{
  background(bg_img);
 // image(bg_img,0,0);

//  Sophia.collide(wall1);
//  Sophia.collide(wall2);
//  Sophia.collide(wall4);
//  Sophia.collide(wall5);
//  Sophia.collide(wall5l6l);
//  Sophia.collide(wall5l7l);
//  Sophia.collide(wall5ll);
//  Sophia.collide(wall12);
//  Sophia.collide(walll4);
//  Sophia.collide(wall7);
//  Sophia.collide(wall07);
//  Sophia.collide(wall007);
//  Sophia.collide(wall3);
//  Sophia.collide(wall8);
//  Sophia.collide(wall9);

//  Sophia.collide(wall12);
//  Sophia.collide(wall008);
//  Sophia.collide(wall7);
//  Sophia.collide(wall12);
//  Sophia.collide(walll4);
//  Sophia.collide(wall7);
//  Sophia.collide(wall07);
//  Sophia.collide(wall007);
//  Sophia.collide(wall3);
//  Sophia.collide(wall8);
//  Sophia.collide(wall9);

if(keyDown(UP_ARROW)){
  push();
  if(count===2){
    Sophia.rotation=70
  }
  else {
    Sophia.rotation=-70;
  }
  Sophia.y=Sophia.y-4;
  
  //Sophia.mirrorY(Sophia.mirrorY() * -1);
  pop();
}
if(keyDown(DOWN_ARROW)){
  push();
  if(count===2){
    Sophia.rotation=-70
  }
  else {
    Sophia.rotation=70;
  }
  Sophia.y=Sophia.y+4;
 
  pop();
}
if(keyDown(LEFT_ARROW)){
  push();
  Sophia.rotation=0;
  Sophia.x=Sophia.x-4;
  if(count===1){
  Sophia.mirrorX(Sophia.mirrorX() * -1);
  pop();
  count++;
  }
  
}
else if(keyDown(RIGHT_ARROW)){
  Sophia.x=Sophia.x+4;
  pop();
  Sophia.rotation=0;
  
  if(count===2){
   
    Sophia.mirrorX(Sophia.mirrorX() * -1);
    pop();
    count=1;
    }
}

for(var i=0;i<shl1Grp.length;i++){
  if(shl1Grp.get(i).isTouching(Sophia)) {
    shl1Grp.get(i).destroy()
    score++;
  }
}
 
  drawSprites();

  textSize(20);
  fill(255);
  text("Score :"+score,660,60);
}


