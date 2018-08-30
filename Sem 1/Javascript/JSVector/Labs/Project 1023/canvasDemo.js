window.onload = init; // Wait for the page to load before we begin animation
var canvas;
var ctx; // This is a better name for a global variable

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 0px';
  canvas.style.backgroundColor = 'gray';
  ctx = canvas.getContext('2d'); // This is the context
  snake = new Snake();
  orb = new Orb();
  mover = new Mover();
  animate(); // Call to your animate function
}
function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  mover.update();
  mover.render();
  orb.update();
  orb.render();
  snake.update();
  snake.render();
}
