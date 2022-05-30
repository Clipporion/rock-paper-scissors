function computerGuess() {
    guess = Math.floor(Math.random()*3+1);
    if (guess === 1) {
        guess = "rock";
    } else if (guess === 2) {
        guess = "paper";
    } else {
        guess = "scissors";
    }
    return guess;
}

function playerGuess() {
        x = prompt("Rock, Paper or Scissors?").toLowerCase();

        if (x == "rock" || x == "paper" || x == "scissors") {
            return x;
        } else {
            playerGuess();
        }
}
