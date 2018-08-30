window.onload = init; // Wait for the page to load before we begin animation
var canvas;
var ctx; // This is a better name for a global variable
var particles = [];
var j = 0;

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 0px';
  canvas.style.backgroundColor = 'gray';
  ctx = canvas.getContext('2d'); // This is the context
  for(var i = 0; i < 50; i++){
    particles.push(new Particle(new JSVector(canvas.width/2, 50)));
  }
  snake = new Snake();
  orb = new Orb();
  mover = new Mover();
  animate(); // Call to your animate function
}
function animate(){
  requestAnimationFrame(animate);
  j++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
 mover.update();
  mover.render();
   orb.update();
   orb.render();
   snake.update();
 snake.render();
  for (var i = particles.length-1; i >= 0; i--){
    if (j == 1){
        particles.push(new Particle(new JSVector(canvas.width/2, 50)));
        j = 0;
    }
    var particle = particles[i];
    //particle.update();
    //particle.render();
    if(particle.isDead()){
      particles.splice(i, 1);
    }
  }
}
