function JSVector(x,y){
  this.x = x;
  this.y = y;
}

JSVector.prototype.setMag = function(mag){
  var angle = this.getDirection();
  this.x = mag * Math.cos(angle);
  this.y = mag * Math.sin(angle);
}

JSVector.prototype.getMag = function(){
  return Math.sqrt(this.x * this.x + this.y * this.y);
}

JSVector.prototype.setDirection = function(angle){
  var mag = this.getMag();
  this.x = mag * Math.cos(angle);
  this.y = mag * Math.sin(angle);
}
JSVector.prototype.getDirection = function(){
  return Math.atan2(this.y, this.x);
}

JSVector.prototype.add = function(vec){
  this.x+=vec.x;
  this.y+=vec.y;
}

JSVector.addGetNew = function(){
  var x = vec1.x +vec2.x;
  var y = vec1.y +vec2.y;
  return new JSVector(x,y);
}

JSVector.prototype.sub = function(vec){
  this.x -= vec.x;
  this.y -= vec.y;
}

JSVector.prototype.subGetNew = function(){

}

JSVector.prototype.mult = function(vec){
  this.x *= vec.x;
  this.y *= vec.y;
}

JSVector.prototype.div = function(vec){
  this.y /= vec.y;
  this.y /= vec.y;
}

JSVector.prototype.normalize = function(a){
  this.x/=a;
  this.y/=a;
}

JSVector.prototype.limit = function(){

}

JSVector.prototype.distance = function(){
  this.dx = this.x - vec.x;
  this.dy = this.y - vec.y;
  return Math.sqrt(dx*dx, dy*dy);
}


JSVector.prototype.lerp = function(){

}


JSVector.prototype.angleBetween = function(){

}

JSVector.prototype.get = function(){

}

JSVector.prototype.rotate = function(){

}

JSVector.prototype.dot = function(){

}

JSVector.prototype.cross = function(){

}

JSVector.prototype.random2D = function(){

}
