const para = document.querySelector(".first");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const black = document.querySelector(".black");
const body = document.querySelector("body");

red.addEventListener("click", function (e) {
  body.style.backgroundColor = "red";
  red.style.backgroundColor = "white";
  black.style.backgroundColor = "white";
  green.style.backgroundColor = "white";
  red.style.color = "black";
  black.style.color = "black";
  green.style.color = "black";
});

green.addEventListener("click", function (e) {
  body.style.backgroundColor = "green";
  red.style.backgroundColor = "white";
  black.style.backgroundColor = "white";
  green.style.backgroundColor = "white";
  red.style.color = "black";
  black.style.color = "black";
  green.style.color = "black";
});

black.addEventListener("click", function (e) {
  body.style.backgroundColor = "grey";
  red.style.backgroundColor = "white";
  black.style.backgroundColor = "white";
  green.style.backgroundColor = "white";
  red.style.color = "black";
  black.style.color = "black";
  green.style.color = "black";
});
