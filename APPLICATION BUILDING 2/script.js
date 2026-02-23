const grid = document.getElementById("grid");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

let score = 0;
let currentMole = null;
let timeLeft = 30;
let moleInterval;
let timerInterval;

// Create 9 holes
for (let i = 0; i < 9; i++) {
  const hole = document.createElement("div");
  hole.classList.add("hole");
  hole.dataset.id = i;
  hole.addEventListener("click", whack);
  grid.appendChild(hole);
}

function randomMole() {
  const holes = document.querySelectorAll(".hole");
  holes.forEach(hole => hole.textContent = "");

  const randomIndex = Math.floor(Math.random() * holes.length);
  holes[randomIndex].textContent = "🐹";
  currentMole = randomIndex;
}

function whack() {
  if (this.dataset.id == currentMole) {
    score++;
    scoreDisplay.textContent = score;
    currentMole = null;
    this.textContent = "";
  }
}

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;

  moleInterval = setInterval(randomMole, 700);

  timerInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(moleInterval);
      clearInterval(timerInterval);
      alert("Game Over! Your score: " + score);
    }
  }, 1000);
}