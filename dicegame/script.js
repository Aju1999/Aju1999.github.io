'use strict';

//selecting elements so we can perform operations on variables in which elements are present (so we dont need to select elements again and agian)
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0'); //while selecting element id using querySelector we should use #
const score1El = document.getElementById('score--1'); //while selecting element id using getElementById we should can use only id name
//these both works as same but getElementById wokrs bit faster than querySelector
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// initial conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Global variable declaration
let score, currentScore, activePlayer, playing;

//initial conditions are initialized
init();
//Rolling dice function
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.Generating new dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2.Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3.Chekc for roll 1 :
    if (dice !== 1) {
      //   if not rolls 1 add score on dice  to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore;
    } else {
      //if rolls 1 end the current players turn and set his score to 0
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      switchPlayer();
    }
  }
});

//Holding the score
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. add current score to main score of active player
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    //2.check if main score is below 100 if above 100 current player wins
    if (score[activePlayer] >= 20) {
      playing = false;
      //active player wins finish the game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', function () {
  init();
});

//funciton to switch players
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active'); //toggle add class if not there and
  player1El.classList.toggle('player--active'); // removes the class if already present there
}

//initialization function
function init() {
  score = [0, 0];
  playing = true;

  currentScore = 0;
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.remove('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');
}
