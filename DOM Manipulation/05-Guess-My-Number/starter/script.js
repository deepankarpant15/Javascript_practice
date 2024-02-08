'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = ' Correct Number';
// console.log(document.querySelector('.message').textContent);  Handling the text message, for inputing value we use .value with query selector
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
*/

let score = 20;
let high = 0;
// generating random number

let secret = Math.trunc(Math.random() * 20) + 1;

// handling event

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // NO value
  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No number!';
  }

  // Win
  else if (guess === secret) {
    document.querySelector('.number').textContent = secret;
    document.querySelector('.message').textContent = 'Win the game';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > high) {
      high = score;
      document.querySelector('.highscore').textContent = high;
    }
  }
  // When guess different
  else if (guess !== secret) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secret ? '📈 Too high!' : '📉 Too low!';
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // Number too high
  /* else if (guess > secret) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high..!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤒You lose the game..';
      document.querySelector('.score').textContent = 0;
    }
  }
  // Number too Low
  else if (guess < secret) {
    if (score > 1) {
      document.querySelector('.message').textContent = C
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤒You lose the game..';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
