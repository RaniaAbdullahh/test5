'use strict'

var userPoint = 0;
var userName = prompt('welcome, what is you name ?');
alert('Nice to meet you ' + userName);



var fatherName = prompt('can you guess what is my fathers name(y/n)?');

if (fatherName.toUpperCase() === 'Y') {
  alert('you are a charm');
  console.log('you are right');
  userPoint++;
}
else {
  alert('no one know anyway');
  console.log('you are wrong');
}

var favFood = prompt('can you guess if my favorite food is pizzan ?(y/n)');

if (favFood.toUpperCase() === 'Y') {
  alert('so that, I love you');
  console.log('you are right');
  userPoint++;
}
else {
  alert('Is there anyone who dont like pizza');
  console.log('you are wrong');
}

var favGame = prompt('can you guess what is my favorite game?(y/n)');

if (favGame.toUpperCase() === 'Y') {
  alert('Every one know that');
  console.log('you are right');
  userPoint++;
}
else {
  alert('so you have never play soduko with me yet');
  console.log('you are wrong');
}


alert('Lets play another game');
alert('you have to guess my number, its between 0 and 10');
alert('Enter the number in the next prompt');

var userGuess = prompt();

while (userGuess > 10) {
  alert(' You should type a number between 0 and 10');
  userGuess = prompt();

}

var myNumber = 0;

  for (var i = 0; i <= 3; i++) {
    if (myNumber === userGuess) {
      alert('You are a charm ,thats Right !!');
      userPoint++; break;

    } else if (10 >= userGuess > 4) {
      alert('thats wrong,thats high,Tray again.now you have onle' + (4 - i) + 'chances');
      userGuess = prompt();

    } else {
      alert('thats wrong,thats low,Tray again.now you have onle' + (4 - i) + 'chances');
      userGuess = prompt();
    }
  }
}