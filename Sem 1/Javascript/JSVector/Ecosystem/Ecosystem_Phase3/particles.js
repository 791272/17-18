function Particle (position) { // position is a vector
  this.acceleration = new JSVector(0, 0.05); // gravity
  this.velocity = new JSVector(Math.random(-1, 1), Math.random(-1, 0));
  this.position = position.copy();
  this.lifespan = 375.0;
  //this.star = 'rgba(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')';
}

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 10;
};
// Method to display
Particle.prototype.render = function() {
  ctx.beginPath();
  ctx.ellipse(this.position.x, this.position.y, 1, 1, 0, 0, 2*Math.PI);
  ctx.lineWidth = 2;
  this.c = 'rgba(' + Math.floor(Math.random()*20000000000000) + ',' + Math.floor(Math.random()*22500000000000252) + ',' + Math.floor(Math.random()*2000000000000000025252) + ',' + this.lifespan/375.0 + ')';
  ctx.fillStyle = this.c;
  ctx.fill();
  ctx.strokeStyle = this.c;
  ctx.stroke();
};
// Is the particle still useful?
Particle.prototype.isDead = function() {
  if (this.lifespan < 0.0) {
    return true;
  } else {
    return false;
  }
}
