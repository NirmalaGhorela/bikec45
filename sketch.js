var player1,player2;
var player1Img,player2Img;
var bgImg;
var obstacle1,obstacle2,obstacle1Img,obstacle2Img;
var road,roadImg;
var resetButton;
var database;
var playerCount,game,player,form,allPlayers,gameState;
var bike1,bike2,obstacles;
var bikes = [];

function preload(){
  bgImg = loadImage("assets/bg.png");
  player1Img = loadImage("assets/player1.png");
  player2Img = loadImage("assets/player2.png");
  obstacle1Image = loadImage("assets/obstacle1.png");
  obstacle2Image = loadImage("assets/obstacle2.png");
  resetButton = loadImage("assets/reset.png");
  roadImg = loadImage("assets/roadimg.png");
}
function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background(bgImg);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}