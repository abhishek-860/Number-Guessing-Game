let num = parseInt((Math.random() * 100 + 1));
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const LowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p')

let prevGuess= []
let numGuess = 1;

let playGame = true;
if(playGame){
      submit.addEventListener('click', function(e){
            e.preventDefault();
            const guess = parseInt(userInput.value);
            validateGuess(guess);
      });
}
function validateGuess(guess){
      if(isNaN(guess)){
            alert('Please enter a valid Number');
      } else if (guess < 1){
            alert('Please enter a number greater than 1');
      } else if(guess > 100){
            alert('Please enter a number less than 100');
      } else {
            prevGuess.push(guess);
            if(numGuess === 11){
                  displayGuess(guess)
                  displayMessage(`Game Over: Random number was ${num}`)
                  endGame();
            } else {
                  displayGuess(guess)
                  checkGuess(guess)
            }
      }
}
function checkGuess (guess){
      if(guess === num){
            displayMessage(`Your guessed it right`)
            endGame()
      } else if (guess < num){
            displayMessage(`Number is TOOO low`)
      }
      else if (guess > num){
            displayMessage(`Number is TOOO High`)
      }
}
function displayGuess(guess){
      userInput.value = ''
      guessSlot.innerHTML += `${guess} `
      numGuess++;
      remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message){
      LowOrHigh.innerHTML = `<h2>${message}</h2>`
}
function newGame(){
      const newGameButton = document.querySelector('#newGame')
      newGameButton.addEventListener('click', function(e){
            num = parseInt(Math.random() * 100 + 1);
            prevGuess = []
            numGuess = 1;
            guessSlot.innerHTML = '';
            remaining.innerHTML = `${11 - numGuess}`
            userInput.removeAttribute('disabled');
            startOver.removeChild(p);
            playGame = true;
      })
}
function endGame(){
      userInput.value = '';
      userInput.setAttribute('disabled', '');
      p.classList.add('button');
      p.innerHTML = `<button id="newGame">Start new Game</button>`;
      startOver.appendChild(p);
      playGame = false;
      newGame();
}
