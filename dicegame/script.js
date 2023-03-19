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

// Global variables
const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
//Rolling dice function
btnRoll.addEventListener('click', function () {
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
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active'); //toggle add class if not there and
    player1El.classList.toggle('player--active'); // removes the class if already present there
  }
});
