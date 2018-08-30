function Attractor(){
  this.loc = new JSVector(Math.random()*(canvas.width-2*this.rad)+this.rad, Math.random()*(canvas.height-2*this.rad)+this.rad);
  this.vel = new JSVector(Math.random()*10-5, Math.random()*10-5)
  this.rad = Math.random()*15+10;

  //Color stuff
  //this.c = 'rgba(' + Math.floor(Math.random()*225) + ',' + Math.floor(Math.random()*225) + ',' + Math.floor(Math.random()*225) + ',' + Math.random()+ ')';
  this.c = 'rgba(' + Math.floor(Math.random()*1) + ',' + Math.floor(Math.random()*1) + ',' + Math.floor(Math.random()*1) + ',' + ((Math.random()*1.2)-0.8)+ ')';


}

Attractor.prototype.update = function(){
  this.loc.add(this.vel);
  //this.loc.add(this.acc);
  if(this.loc.x + this.rad >= canvas.width || this.loc.x -this.rad <= 0){
    this.vel.x = -(this.vel.x);
  }
  if(this.loc.y + this.rad >= canvas.height || this.loc.y -this.rad <= 0){
    this.vel.y = -(this.vel.y);
 }
}

Attractor.prototype.render = function(){
  ctx.beginPath();
  ctx.arc(this.loc.x, this.loc.y, this.rad, 0, Math.PI*2);
  //ctx.rect(this.loc.x,this.loc.y+this.rad,0,1000000)
  ctx.fillStyle = this.c;
  ctx.fill();
  ctx.strokeStyle = this.c;
  ctx.stroke();
}
