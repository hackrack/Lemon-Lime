function changeBoxColors() {
  var position = window.prompt("Please choose #topLeft, #topRight, #bottomLeft, #bottomRight");
  var color = window.prompt("Please choose your own color");
  var divs = document.querySelectorAll("div");
  document.querySelector(position).style.backgroundColor = color;
}
for (var i = 1; i <= 4; i++) {
  changeBoxColors();
}
