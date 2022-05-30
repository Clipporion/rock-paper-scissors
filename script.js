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
function playRound (player, computer) {
    if (player == "rock" && computer == "paper") {
    return "You lost!";
    } else if (player == "rock" && computer == "scissors") {
    return "You win";
    } else if (player == "paper" && computer == "scissors") {
    return "You lost!";
    } else if (player == "paper" && computer == "rock") {
    return "You win";
    } else if (player == "scissors" && computer == "rock") {
    return "You lost!";
    } else if (player == "scissors" && computer == "paper") {
    return "You win"
    } else {
    return "This was a draw";
    }
}