const countHolder = document.getElementById("counter");
const btnCounter = document.getElementById("myBtn");
const stopwatch = document.getElementById("stopwatch");
const openMouth = document.getElementById("open");
const closed = document.getElementById("closed");

//id selectors ^^^^^
let counter = 0;

let timerStart;
let timer;
let time;
let seconds = 0;
let centiSeconds = 0;
let minutes = 0;
// variables ^^^^^

const playAudio = () => {
  const pop = document.getElementById("pop");
  pop.play();
};

const updateStopwatch = () => {
  const time = Date.now() - timerStart;
  const seconds = Math.floor(time / 1000) % 60;
  const centiSeconds = Math.floor(time / 10) % 100;
  const minutes = Math.floor(time / 1000 / 60) % 60;

  stopwatch.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}:${centiSeconds.toString().padStart(2, "0")}`;
};

btnCounter.onclick = () => {
  playAudio();
  counter++;
  countHolder.innerHTML = counter;
  openMouth.classList.toggle("visable");
  closed.classList.toggle("hidden");
  if (counter === 20) {
    clearInterval(timer);
    counter--;
    closed.classList.remove("hidden");
    openMouth.classList.remove("visable");
  }

  if (counter === 1) {
    timerStart = Date.now();

    updateStopwatch();
    timer = setInterval(() => {
      updateStopwatch();
    }, 10);
  }
};
