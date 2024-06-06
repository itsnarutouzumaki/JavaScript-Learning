const clue = document.querySelector(".clue");
const number = document.querySelector(".number");
const button = document.querySelector(".submit");
const guesses = document.querySelector(".guesses");
const Attempt = document.querySelector(".Attempt");
const container=document.querySelector(".container");
let time = 0;
let rand = 0;

button.addEventListener("click", function (e) {
  if (time === 0) {
    startGame();
  } else {
    makeGuess();
  }
});

function makeGuess() {
  const userGuess = Number(number.value);

  if (userGuess == rand) {
    clue.innerHTML = "You Won!!!";
    clue.style.color = "green";
    clue.style.fontSize="25px";
    clue.style.fontWeight="900";
    container.style.backgroundColor="yellow";
    guesses.innerHTML += ` ${number.value}`;
    time--;
    endGame();
    return;
  } else if (userGuess > rand) {
    clue.innerHTML = "Number is High";
    clue.style.color = "red";
    guesses.innerHTML += ` ${number.value}`;
    time--;
    Attempt.innerHTML = `${time}`;
  } else {
    clue.innerHTML = "Number is Low";
    clue.style.color = "red";
    guesses.innerHTML += ` ${number.value}`;
    time--;
    Attempt.innerHTML = `${time}`;
  }

  number.value = '';

  if (time == 0) {
    clue.innerHTML = "You Lost!!!";
    clue.style.color = "red";
    endGame();
  }
}

function startGame() {
  rand = Math.floor(Math.random() * 100) + 1;
  button.value = "Guess";
  time = 10;
  Attempt.innerHTML = `${time}`;
  guesses.innerHTML = '';
  clue.innerHTML = "Enter your guess";
  clue.style.color = "black";
  container.style.backgroundColor="white";

}

function endGame() {
  time = 0;
  button.value = "Start Game";
}
