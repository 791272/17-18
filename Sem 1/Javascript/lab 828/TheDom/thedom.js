window.onload = function() {
  console.log("hello");
  createDiv();
  styleDiv();
  makeBtn();
}


function createDiv(){
  console.log("Inside createDiv");
  var wrapperDiv = document.createElement("div");
  wrapperDiv.setAttribute("id", "wrapperDiv");
  document.body.appendChild(wrapperDiv);
  var headerDiv = document.createElement("div");
  headerDiv.setAttribute("id", "headerDiv");
  wrapperDiv.appendChild(headerDiv);
  var navDiv = document.createElement("div");
  navDiv.setAttribute("id","navDiv");
  wrapperDiv.appendChild(navDiv);
  var bodyDiv = document.createElement("div");
  bodyDiv.setAttribute("id", "bodyDiv");
  wrapperDiv.appendChild(bodyDiv);
  var footerDiv = document.createElement("div");
  wrapperDiv.appendChild(footerDiv);
  footerDiv.setAttribute("id", "footerDiv");
}
function styleDiv(){
  document.body.style.backgroundColor = "gray";
}

function makeBtn(){
  var btn = document.createElement("BUTTON");
  var t = document.createTextNode("CLICK ME");
  btn.appendChild(t);
  document.body.appendChild(btn);
}
