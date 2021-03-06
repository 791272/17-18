function Mover(){
  this.loc = new JSVector(Math.random()*canvas.width, Math.random()*canvas.height);
  this.vel = new JSVector(Math.random()*10, Math.random()*10);
  this.rad = 0.0000001;
  this.acc = new JSVector(0, 0);
  //this.c = 'rgba(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.random() + ')';
}

Mover.prototype.update = function(){
  this.loc.add(this.vel);
  this.vel.add(this.acc);
  this.vel.limit(5);
  if(this.loc.x + this.rad >= canvas.width || this.loc.x - this.rad <= 0){
    this.vel.x = -(this.vel.x);
  }
  if(this.loc.y + this.rad >= canvas.height || this.loc.y - this.rad <= 0){
    this.vel.y = -(this.vel.y);
  }
}

Mover.prototype.render = function(){
  ctx.beginPath();
  ctx.arc(this.loc.x,this.loc.y,this.rad,0,2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.strokeStyle = 'white';
  ctx.stroke();
}

Mover.prototype.applyForce = function(f){
  this.acc.add(f);
}
