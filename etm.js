function myFunc() {
  var arr = document.querySelectorAll("p");
  arr.forEach(function(ele, index) {
    if (index % 2 === 0) {
      ele.classList.add("bgGreen");
    } else {
      ele.classList.add("bgYellow");
    }
  })
  return arr;
}
myFunc();
