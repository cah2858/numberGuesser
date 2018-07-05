var min = parseInt(document.querySelector('#min-value').value, 10);
var max = parseInt(document.querySelector('#max-value').value, 10);
var randomNumber = getRandomIntInclusive(min, max); 
var statusOutput = document.querySelector('#status-output');
var guessInput = document.querySelector('#guess-input');
var lastGuess = document.querySelector('#last-guess');
var guessButton = document.querySelector('#guess-button');
var resetButton = document.querySelector('#reset-game');
var clearButton = document.querySelector('#clear-input');
var pLastGuess = document.querySelector('#p-last-guess');
var minButton = document.querySelector('#min-value');
var maxButton = document.querySelector('#max-value');

guessInput.focus();
statusOutput.innerText = `Guess a number between ${min} and ${max}`;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function checkGuess() {
  var guessVal = parseInt(guessInput.value);
  if (guessVal != NaN && guessVal >=min && guessVal <= max) {
    resetButton.disabled = false;
    pLastGuess.innerText = 'Your last guess was';
    lastGuess.innerText = guessVal;
    if (guessVal === randomNumber) {
      statusOutput.innerText = 'BOOM!';
      min -= 10; max += 10;   //I know...
      pLastGuess.innerText = `Now guess a number between ${min} and ${max}`;
      randomNumber = getRandomIntInclusive(min, max); 
      return
    }
    if (guessVal < randomNumber) {
      statusOutput.innerText = 'That is too low';
    }
    if (guessVal > randomNumber) {
      statusOutput.innerText = 'That is too high';
    }
  }
  else {
    statusOutput.innerText = `Enter a number between ${min} and ${max}`;
    lastGuess.innerText = 'doh!';
  }
}

function clearInput() {
  guessInput.value = '';
  clearButton.disabled = true;
  guessInput.focus();
}

guessInput.addEventListener('keyup', function(event) {
  event.preventDefault();
  if (guessInput.value.length == 0) {
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;
  } 
});

minButton.addEventListener('keyup', function(event) {
  event.preventDefault();
  min = parseInt(document.querySelector('#min-value').value, 10);
  randomNumber = getRandomIntInclusive(min, max);
  statusOutput.innerText = `Guess a number between ${min} and ${max}`;
});

maxButton.addEventListener('keyup', function(event) {
  event.preventDefault();
  max = parseInt(document.querySelector('#max-value').value, 10);
  randomNumber = getRandomIntInclusive(min, max);
  statusOutput.innerText = `Guess a number between ${min} and ${max}`;
});

guessButton.addEventListener('click', function(event) {
  event.preventDefault();
  checkGuess();
  clearInput();
});

clearButton.addEventListener('click', function(event) {
  event.preventDefault();
  clearInput();

});

resetButton.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.reload(true);
});