const answerTextEl = document.getElementById("text");
const btnagainEl = document.getElementById("btnagain");
const answerNumberEl = document.getElementById("number");
const guessInputEl = document.getElementById("guess");
const btnchekEl = document.querySelector(".check");
const messageEl = document.getElementById("message");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const modalBgEl = document.querySelector(".modal-bg");
const modalbtnokEl = document.querySelector(".btn-ok");
const modalBg1El = document.querySelector(".modal-bg1");
const modalbtnok1El = document.querySelector(".btn-ok1");

// CHECK BUTTON
btnchekEl.addEventListener("click", checkNumber);
guessInputEl.addEventListener("check", (e) => {
  if (e.key === 13) {
    return checkNumber();
  }
});
btnagainEl.addEventListener("click", gameAgain);
modalbtnokEl.addEventListener("click", function () {
  modalBgEl.classList.remove("bg-active");
});

//modal lose
modalbtnok1El.addEventListener("click", function () {
  modalBg1El.classList.remove("bg-active1");
});
// RANDOM NUMBER
let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);
// SCORE
let score = 20;

// HIGH SCORE
let highscore = 0;

function checkNumber() {
  if (randomNumber == guessInputEl.value) {
    modalBgEl.classList.add("bg-active");

    document.body.style.background = "rgb(15, 218, 15)";
    answerNumberEl.textContent = randomNumber;
    messageEl.textContent = "You are Winner 🎉";

    if (highscore < score) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } else if (randomNumber < guessInputEl.value) {
    messageEl.textContent = "⬇️ Guess Lower Number";

    score--;
    scoreEl.textContent = score;
    return returAgainscore();
  } else {
    messageEl.textContent = "⬆️ Guess Higher Number";

    score--;
    scoreEl.textContent = score;
    return returAgainscore();
  }
}

function returAgainscore() {
  if (score == 0) {
    modalBg1El.classList.add("bg-active1");
    return youLose();
  }
}

function gameAgain() {
  randomNumber = Math.floor(Math.random() * 6);
  score = 5;
  scoreEl.textContent = 5;
  messageEl.textContent = "Start guessing...";
  document.body.style.background = "#222";
  answerNumberEl.textContent = "?";
  guessInputEl.value = "";
}

function youLose() {
  score = 1;
  messageEl.textContent = "You Lose the Game";
  document.body.style.background = "rgb(248, 9, 9)";
}
