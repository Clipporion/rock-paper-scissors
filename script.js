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
    return "You chose rock, computer chose paper. You lost!";
    } else if (player == "rock" && computer == "scissors") {
    return "You chose rock, computer chose scissors. You win!";
    } else if (player == "paper" && computer == "scissors") {
    return "You chose paper, computer chose scissors. You lost!";
    } else if (player == "paper" && computer == "rock") {
    return "You chose paper, computer chose rock. You win!";
    } else if (player == "scissors" && computer == "rock") {
    return "You chose scissors, computer chose rock. You lost!";
    } else if (player == "scissors" && computer == "paper") {
    return "You chose scissors, computer chose rock. You win!"
    } else {
    return "This was a draw";
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
    x = playerGuess();
    y = computerGuess();
    console.log(playRound(x,y));
    }
    }