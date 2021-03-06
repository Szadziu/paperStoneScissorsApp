const paperChoice = document.querySelector(".img1");
const stoneChoice = document.querySelector(".img2");
const scissorsChoice = document.querySelector(".img3");
const startButton = document.querySelector(".start");
const newGameButton = document.querySelector(".newGame");
const resetResultsButton = document.querySelector(".resetResults");
const yourChoice = document.querySelector(".yourChoice");

let compChoice = Math.floor(Math.random() * 3);
let userChoice = "";
let amountGames = 0;
let winGames = 0;
let loseGames = 0;
let drawGames = 0;

const myChoice = (event) => {
  event.target.style.boxShadow = "1px 0 5px 3px green";
  checkResult(event.target);
};

const startGame = () => {
  if (yourChoice.textContent === "") {
    return;
  }
  if (compChoice === 0) {
    document.querySelector(".compChoice").textContent = "papier";
  } else if (compChoice === 1) {
    document.querySelector(".compChoice").textContent = "kamień";
  } else {
    document.querySelector(".compChoice").textContent = "nożyce";
  }

  amountGames++;
  if (userChoice === compChoice) {
    drawGames++;
    document.querySelector(".dGam").textContent = drawGames;
    document.querySelector(".amGam").textContent = amountGames;
    document.querySelector(".winner").textContent = "draw";
  } else if (userChoice === 0 && compChoice === 1) {
    winGames++;
    document.querySelector(".wGam").textContent = winGames;
    document.querySelector(".amGam").textContent = amountGames;
    document.querySelector(".winner").textContent = "you won";
  } else if (userChoice === 0 && compChoice === 2) {
    loseGames++;
    document.querySelector(".lGam").textContent = loseGames;
    document.querySelector(".amGam").textContent = amountGames;
    document.querySelector(".winner").textContent = "you lose";
  } else if (userChoice === 1 && compChoice === 0) {
    loseGames++;
    document.querySelector(".lGam").textContent = loseGames;
    document.querySelector(".amGam").textContent = amountGames;
    document.querySelector(".winner").textContent = "you lose";
  } else if (userChoice === 1 && compChoice === 2) {
    winGames++;
    document.querySelector(".wGam").textContent = winGames;
    document.querySelector(".amGam").textContent = amountGames;
    document.querySelector(".winner").textContent = "you won";
  } else if (userChoice === 2 && compChoice === 0) {
    winGames++;
    document.querySelector(".wGam").textContent = winGames;
    document.querySelector(".amGam").textContent = amountGames;
    document.querySelector(".winner").textContent = "you won";
  } else if (userChoice === 2 && compChoice === 1) {
    loseGames++;
    document.querySelector(".lGam").textContent = loseGames;
    document.querySelector(".amGam").textContent = amountGames;
    document.querySelector(".winner").textContent = "you lose";
  }
  startButton.disabled = "true";
};

const checkResult = (ourChoice) => {
  if (ourChoice.className === "img1") {
    ourChoice.dataset.option = "choice";
    stoneChoice.style.pointerEvents = "none";
    scissorsChoice.style.pointerEvents = "none";
    userChoice = 0;
    yourChoice.textContent = "paper";
  } else if (ourChoice.className === "img2") {
    ourChoice.dataset.option = "choice";
    paperChoice.style.pointerEvents = "none";
    scissorsChoice.style.pointerEvents = "none";
    userChoice = 1;
    yourChoice.textContent = "stone";
  } else if (ourChoice.className === "img3") {
    ourChoice.dataset.option = "choice";
    paperChoice.style.pointerEvents = "none";
    stoneChoice.style.pointerEvents = "none";
    userChoice = 2;
    yourChoice.textContent = "scissors";
  }
};

const newGame = () => {
  paperChoice.style.pointerEvents = "auto";
  stoneChoice.style.pointerEvents = "auto";
  scissorsChoice.style.pointerEvents = "auto";

  paperChoice.style.boxShadow = "0 0 0 0";
  stoneChoice.style.boxShadow = "0 0 0 0";
  scissorsChoice.style.boxShadow = "0 0 0 0";

  compChoice = Math.floor(Math.random() * 3);
  yourChoice.textContent = "";
  document.querySelector(".compChoice").textContent = "";
  document.querySelector(".winner").textContent = "";
  startButton.disabled = "";
};

const updateResults = () => {
  amountGames = 0;
  winGames = 0;
  loseGames = 0;
  drawGames = 0;

  document.querySelector(".amGam").textContent = amountGames;
  document.querySelector(".wGam").textContent = winGames;
  document.querySelector(".lGam").textContent = loseGames;
  document.querySelector(".dGam").textContent = drawGames;
  newGame();
};

paperChoice.addEventListener("click", myChoice);
stoneChoice.addEventListener("click", myChoice);
scissorsChoice.addEventListener("click", myChoice);
startButton.addEventListener("click", startGame);
newGameButton.addEventListener("click", newGame);
resetResultsButton.addEventListener("click", updateResults);
