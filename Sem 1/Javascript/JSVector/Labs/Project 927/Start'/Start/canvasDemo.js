

window.onload = init; // Wait for the page to load before we begin animation
var canvas;
var ctx;// This is a better name for a global variable
var balls = new Array();
var atts = new Array();
var movers = new Array();
var reps = new Array();

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
  for(var i = 0; i < 500; i++){
     balls.push(new Ball());
  }
  animate(); // Call to your animate function
}

// To do::
//  1. Declare and init variables x, y, dx, dy, radius;

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < movers.length; i++){
    var mover = movers[i];
    mover.update();
    mover.render();
  }
  for(var i = 0; i < atts.length; i++){
    var att = atts[i];
    att.update();
    att.render();
    for (var j = 0; j < movers.length; j++){
      if(movers[j].distance(att[j]<=300 && movers[j].distance(atts[i]) >= 5){
      var acc = JSVector.subGetNew(atts[i].loc, movers[j].loc);
      acc.normalize();
      acc.mult(1);
      movers[j].vel.add(acc);
    }
   }
  }
  for(var i = 0; i < reps.length; i++){
    var rep = reps[i];
    rep.update();
    rep.render();
    for(var j = 0; j < movers.length; j++){
      var acc = JSVector.subGetNew(atts[i].loc, movers[j].loc);
      if(acc.getMag() <= 200){
      acc.normalize();
      acc.mult(10000);
      movers[j].vel.sub(acc);
    }
   }
  }
}


function Ball(){
  this.rad = Math.random()*15+10;
  this.loc = new JSVector(Math.random()*(canvas.width-2*this.rad)+this.rad, Math.random()*(canvas.height-2*this.rad)+this.rad);
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
