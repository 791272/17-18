window.onload = init;

function init(){
  document.body.style.backgroundColor = "black";
  makeDivs();
}

function makeDivs(){
  var wrapper = document.getElementById("wrapperDiv");

  var head = document.createElement("div");
  head.setAttribute("id", "headerDiv");
  head.textContent = "HeadDiv";
  head.style.color = "red";
  head.style.width = "900px";
  head.style.height = "200px";
  head.style.border = "solid white, 10px";
  head.style.backgroundColor = "green";

  wrapper.appendChild(head);

}
