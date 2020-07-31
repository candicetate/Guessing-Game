// create secret number
var secretNumber = 4;

// ask user for guess
var guess = Number(prompt("Pick a number between 1 & 10"));

//check guess
if (guess === secretNumber) {
  alert("You got it right!");
} else if (guess > secretNumber) {
  alert("Too high! Guess again.");
} else {
  alert("Too low. Guess again");
}
