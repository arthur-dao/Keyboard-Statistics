var presses = 0;
var press = document = document.querySelector(".hits");

document.body.onkeyup = function (e) {
  if ((e.keyCode == 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) {
    increment();
  }
};

var increment = function () {
  presses++;
  updateDisplay();
};

var updateDisplay = function () {
  press.innerHTML = presses;
};
