

window.onload = init; // Wait for the page to load before we begin animation
var canvas;
var ctx;// This is a better name for a global variable
var balls = new Array();
var att = new Array();
var mov = new Array();

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(60,60,60,1.0)';
  // get the context
  ctx = canvas.getContext('2d'); // This is the context\
  for(var i = 0; i < 1; i++){
     mov.push(new Mover());
  }
  for(var i = 0; i < 1000; i++){
     balls.push(new Ball());
  }
  animate(); // Call to your animate function
}

// To do::
//  1. Declare and init variables x, y, dx, dy, radius;

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < balls.length; i++){
    var ball = balls[i];
    ball.update();
    ball.render();
  }
  for (var i = 0; i < 1; i++){
    var mov = mov;
    ball.update();
    ball.render();
  }

}


function Ball(){
  this.rad = Math.random()*15+10;
//this.loc = new JSVector(Math.random()*(canvas.width-2*this.rad)+this.rad, Math.random()*(canvas.height-2*this.rad)+this.rad);
  this.loc = new JSVector(1000, 100);
  this.vel = new JSVector(Math.random()*10-5, Math.random()*10-5)
  this.acc = new JSVector(0, Math.random());
  //Color stuff
  //this.c = 'rgba(' + Math.floor(Math.random()*225) + ',' + Math.floor(Math.random()*225) + ',' + Math.floor(Math.random()*225) + ',' + Math.random()+ ')';
  this.c = 'rgba(' + Math.floor(Math.random()*1) + ',' + Math.floor(Math.random()*1) + ',' + Math.floor(Math.random()*1) + ',' + ((Math.random()*1.2)-0.8)+ ')';


}


Ball.prototype.update = function(){
  this.loc.add(this.vel);
  //this.loc.add(this.acc);
  if(this.loc.x + this.rad >= canvas.width || this.loc.x -this.rad <= 0){
    this.vel.x = -(this.vel.x);
  }
  if(this.loc.y + this.rad >= canvas.height || this.loc.y -this.rad <= 0){
    this.vel.y = -(this.vel.y);
 }

}

Ball.prototype.render = function(){
  ctx.beginPath();
  ctx.arc(this.loc.x, this.loc.y, this.rad, 0, Math.PI*2);
  //ctx.rect(this.loc.x,this.loc.y+this.rad,0,1000000)
  ctx.fillStyle = this.c;
  ctx.fill();
  ctx.strokeStyle = this.c;
  ctx.stroke();
}
