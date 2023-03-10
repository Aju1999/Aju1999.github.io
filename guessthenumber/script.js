'use strict';

let randomNum = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.btn.check').addEventListener('click', function () {
  // document.querySelector('.number').textContent = randomNum;
  let val = Number(document.querySelector('.guess').value);
  let scoreVal = Number(document.querySelector('.score').textContent);
  //When there is no input
  if (val === 0) {
    document.querySelector('.message').textContent = '🤦‍♂️ No Number here!🤷‍♂️';
  } else if (val <= 20) {
    //when input is correct
    if (val === randomNum) {
      document.querySelector('.message').textContent = '👏 Correct Number!';
      document.querySelector('.number').textContent = randomNum;
      document.querySelector('body').style.backgroundColor = '#5a9681';
      document.querySelector('.number').style.width = '30rem';
      let Score = Number(document.querySelector('.score').textContent);
      let highScore = Number(document.querySelector('.highscore').textContent);
      if (Score > highScore) {
        document.querySelector('.highscore').textContent = Score;
      }
    }

    //when input is higher
    else if (val > randomNum) {
      validate('High', scoreVal, val);
      // if (scoreVal > 1) {
      //   if (val <= Math.abs(randomNum + 4)) {
      //     document.querySelector('.message').textContent = '📈Number is High!';
      //   } else {
      //     document.querySelector('.message').textContent =
      //       '📈Number is too High!';
      //   }

      //   document.querySelector('.score').textContent = scoreVal - 1;
      // } else {
      //   document.querySelector('.message').textContent = '😜You Lost Game!';
      //   document.querySelector('.score').textContent = 0;
      // }
    }

    //when input is Less
    else if (val < randomNum) {
      validate('Low', scoreVal, val);
      // if (scoreVal > 1) {
      //   if (val >= Math.abs(randomNum - 4)) {
      //     document.querySelector('.message').textContent = '📉Number is Low!';
      //   } else {
      //     document.querySelector('.message').textContent =
      //       '📉Number is too Low!';
      //   }
      //   document.querySelector('.score').textContent = scoreVal - 1;
      // } else {
      //   document.querySelector('.message').textContent = '😜You Lost Game!';
      //   document.querySelector('.score').textContent = 0;
      // }
    }
  }
  //Whn number is greater then 20
  else {
    document.querySelector('.message').textContent =
      '⛔Number Should below 20!';
  }
});

//Again buttons reset functionality
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = 20;
  randomNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  // document.querySelector('.number').textContent = randomNum;
});

function validate(result, scoreVal, val) {
  if (scoreVal > 1) {
    if (val >= Math.abs(randomNum - 4)) {
      document.querySelector('.message').textContent =
        '📉Number is ' + result + '!';
    } else {
      document.querySelector('.message').textContent =
        '📉Number is too ' + result + '!';
    }
    document.querySelector('.score').textContent = scoreVal - 1;
  } else {
    document.querySelector('.message').textContent = '😜You Lost Game!';
    document.querySelector('.score').textContent = 0;
  }
}
/*var val = function () {
  let val = document.querySelector('.guess').value;
  if (val === '') {
    console.log('Text Box is Empty');
  } else {
    console.log(val);
    document.querySelector('.score').textContent = val;
  }
};*/

// testing code for manipulations on Page
/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '✨ Correct Number...';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = '12';
document.querySelector('.score').textContent =
  document.querySelector('.number').textContent;

document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);

document.querySelector('.highscore').textContent =
  document.querySelector('.guess').value;
*/
