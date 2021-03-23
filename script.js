// Global Constants
const cluePauseTime = 333; // pause time between clues
const nextClueWaitTime = 1000; // wait time before next sequence
const numOptions = 4; // number of buttons
const clueHoldMax = 500; // max time clue plays
const totalTime = 5; // total guess time (s)
const timerUpdate = 10; // how often timer updates (ms)

// Global Variables
let patternSize = 6; // length of sequence
let pattern; // pattern array with random elements
let progress = 0; // number of correct sequences
let gamePlaying = false; // is game playing?
let tonePlaying = false; // is tone playing?
let volume = 0.5; // sound volume (0-1)
let guessCounter = 0; // correct guesses in a sequence
let clueHoldTime = clueHoldMax; // how long to hold clue
let clueHoldInc = 100; // how much the hold time decreases
let clueHoldMin = 100; // minimum time clue plays
let mistakes = 0; // current number of mistakes
let secondsRemain = totalTime; // time remaining (s)
let timer; // will be set to timer interval

// Select the letters of "SIMONE" to track mistakes
const siEle = document.getElementById("SI");
const moEle = document.getElementById("MO");
const neEle = document.getElementById("NE");

let lettersList = [siEle, moEle, neEle];

const buttons = document.querySelectorAll("button");

// Sets gamePlaying to true and plays the first clue
function startGame() {
  pattern = Array.from({ length: patternSize }, () =>
    Math.floor(1 + Math.random() * numOptions)
  );
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

// Resets variables to the initial condition
function stopGame() {
  gamePlaying = false;
  clueHoldTime = clueHoldMax;
  for (let i = 0; i < 3; i++) {
    lettersList[i].classList.remove("red");
  }
  mistakes = 0;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  clearInterval(timer);
  secondsRemain = totalTime;
  setProgress(100);
}

// Calls stop game and alerts user about loss
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

// Calls stop game and alerts user about loss
function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

// Applies CSS class to light button
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

// Removes CSS class to unlight button
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

// Lights a button and plays a sound
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

// Plays the sequence of clues
function playClueSequence() {
  // Reset the timer
  setProgress(100);
  clearInterval(timer);

  buttons.forEach(button => {
    button.disabled = true;
  });

  guessCounter = 0;
  let delay = nextClueWaitTime;

  // Decrease clueHoldTime
  if (clueHoldTime > clueHoldMin) {
    clueHoldTime -= clueHoldInc;
  } else if (clueHoldTime < clueHoldMin) {
    clueHoldTime = clueHoldMin;
  }

  // Plays the clues in the sequence, up to progress
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }

  // Starts the timer
  setTimeout(() => {
    if (gamePlaying) {
      timer = setInterval(() => {
        setProgress(((secondsRemain -= timerUpdate / 1000) / totalTime) * 100);
      }, timerUpdate);
      buttons.forEach(button => {
        button.disabled = false;
      });
    }
  }, (clueHoldTime + cluePauseTime) * (progress + 2) + cluePauseTime);
}

// Game logic for clicking a button
function guess(btn) {
  if (!gamePlaying) {
    return;
  }

  // If guess correct, increment guess counter
  if (btn == pattern[guessCounter]) {
    guessCounter++;
  }
  // If guess incorrect, increment mistake and replay the sequence or lose
  else {
    for (let i = 0; i < numOptions; i++) {
      playSingleClue(i + 1);
    }
    lettersList[mistakes].classList.add("red");
    mistakes++;
    if (mistakes == 3) {
      loseGame();
    } else {
      guessCounter = 0;
      clueHoldTime += clueHoldInc;
      secondsRemain = totalTime;
      playClueSequence();
    }
  }

  // If the whole pattern is exhausted, win
  if (guessCounter == pattern.length) {
    winGame();
  }
  // If the sequence is exhausted, play the next one
  else if (progress < guessCounter) {
    progress++;
    secondsRemain = totalTime;
    playClueSequence();
  }
}

// Sound Synthesis Functions

// Cmaj7 Chord
const freqMap = {
  1: 256.8,
  2: 323.63,
  3: 384.87,
  4: 484.9,
  5: 100
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization

// Init Sound Synthesizer
let context = new AudioContext();
let o = context.createOscillator();
let g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

// Allow chrome to play audio
buttons.forEach(button => {
  button.addEventListener("click", function() {
    context.resume().then(() => {
      console.log("Playback resumed successfully");
    });
  });
});

// Progress circle functions
// https://css-tricks.com/building-progress-ring-quickly/
let circle = document.getElementById("circle");
let radius = circle.r.baseVal.value;
let circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
  if (percent < 0) {
    loseGame();
  }
}

setProgress(100);
