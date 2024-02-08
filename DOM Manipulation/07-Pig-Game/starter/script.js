'use strict';

// selecting element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score1el = document.getElementById('score--0');
const score2el = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currscore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// Startingconditions
score1el.textContent = 0;
score2el.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice
let currscore = 0;
let scores = [0, 0];
let activeplayer = 0;
let playing = true;

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate a random number btw1-6
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);
    // 2. Display the image
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. check rolled 1;
    if (dice !== 1) {
      // add dice to currscore
      currscore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currscore;
    } else {
      // switch to player
      switchplayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  // 1. add currentscore to playermainscore
  if (playing) {
    scores[activeplayer] += currscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];

    //2. check the score
    if (scores[activeplayer] >= 20) {
      //finish game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
      //3. switch player
      switchplayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  playing = true;
  scores = [0, 0];
  currscore = 0;
  activeplayer = 0;
  score1el.textContent = 0;
  score2el.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');

  player0El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player1El.classList.remove('player--winner');
});
