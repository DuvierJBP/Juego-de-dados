var randomNumber1 = Math.round(Math.random() * 5) + 1;
var player1 = 0;
paintDice(player1, randomNumber1);

var randomNumber2 = Math.round(Math.random() * 5) + 1;
var player2 = 1;
paintDice(player2, randomNumber2);

if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerText = 'player1 wins! 🚩';
} else if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerText = 'player2 wins! 🚩';
} else {
  document.querySelector('h1').innerText = 'Draw!';
}

function paintDice(player, value) {
  var address = 'images/dice' + value + '.png';
  document.getElementsByTagName('img')[player].setAttribute('src', address);
}
