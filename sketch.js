var player1,player2;
var player1Img,player2Img;
var bgImg;
var obstacle1,obstacle2,obstacle1Img,obstacle2Img;
var road,roadImg;
var resetButton;
var database;
function preload(){
  bgImg = loadImage("assets/bg.png");
  player1Img = loadImage("assets/player1.png");
  player2Img = loadImage("assets/player2.png");
  obstacle1Img = loadImage("assets/obstacle1.png");
  obstacle2Img = loadImage("assets/obstacle2.png");
  resetButton = loadImage("assets/resetbutton.png");
  roadImg = loadImage("assets/road image.png");
}
function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  database = firebase.database;
  
}
function draw(){
  
}
