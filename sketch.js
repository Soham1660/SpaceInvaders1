var score = 0;
var lives = 3;
var Aliens,invaderImg;
var lasers;
var player = {
  x:400,
  y: 700,
  speed:4
}
function preload(){


}
function setup(){
  createCanvas(800,800);
}
function draw(){
  background(0);
  drawPlayer();
  playerInput();
  drawUi();
  shooting();
}
function drawUi(){
  push();
  fill(255,255,255);
  stroke(50,150,50);
  strokeWeight(8);
  textSize(30);
  textAlign(LEFT);
  text("Score:" + score,20,45);
  textAlign(RIGHT);
  text("Lives:" + lives,780,45);
  pop();
}
function drawPlayer(){
  fill(80,255,75);
  noStroke();
  rectMode(CENTER);

  rect(player.x,player.y,60,30);
  rect(player.x,player.y-15,15,30)
}
function playerInput(){
  if(keyIsDown(LEFT_ARROW)){
    player.x -=player.speed;
  } else if(keyIsDown(RIGHT_ARROW)){
    player.x += player.speed;
  }
}

