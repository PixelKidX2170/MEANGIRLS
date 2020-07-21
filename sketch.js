var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var carI1, carI2, carI3, carI4

var cars, car1, car2, car3, car4;

var Track

function preload(){
  carI1=loadImage("images/car1.png")
  carI2=loadImage("images/car2.png")
  carI3=loadImage("images/car3.png")
  carI4=loadImage("images/car4.png")

  Track=loadImage("images/track.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 40, displayHeight-190);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end()
  }
}
