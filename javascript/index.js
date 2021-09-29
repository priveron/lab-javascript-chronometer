const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minDecElement.textContent = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[0];
  minUniElement.textContent = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[1];
}

function printSeconds() {
  secDecElement.textContent = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[0];
  secUniElement.textContent = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const split = document.createElement("li");
  split.textContent = chronometer.split();
  splitsElement.appendChild(split);
}

function clearSplits() {
  [...splitsElement.childNodes].forEach((v) => splitsElement.removeChild(v));
}

function setStopBtn() {
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnLeftElement.textContent = 'STOP';
}

function setSplitBtn() {
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
  btnRightElement.textContent = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnLeftElement.textContent = 'START';
}

function setResetBtn() {
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
  btnRightElement.textContent = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start();
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    clearSplits();
  } else {
    printSplit();
  }
});

// requestAnimationFrame(() => {
//     printTime();
// });

setInterval(() => {
  if (btnLeftElement.classList.contains('stop')) printTime();
}, 100);
