function random() {
  const s = "0123456789ABCDEF";
  let ans = "#";

  for (let i = 0; i < 6; i++) {
    ans += s[Math.floor(Math.random() * 16)];
  }
  return ans;
}

let intervalId = null;

document.querySelector(".start").addEventListener("click", function (e) {
  if (intervalId === null) {
    intervalId = setInterval(function () {
      document.querySelector("body").style.backgroundColor = random();
    }, 500);
  }
});

document.querySelector(".stop").addEventListener("click", function (e) {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
});
