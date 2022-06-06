const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
let playerScore = 0;
let computerScore = 0;

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

function playRound (e) {
    let computer = computerGuess();
    let player = e.target.textContent.toLowerCase();

    if (player == "rock" && computer == "paper" ||
        player == "paper" && computer == "scissors" ||
        player == "scissors" && computer == "rock") {
    computerScore += 1;
    result.textContent = `You chose ${player.charAt(0).toUpperCase()+player.slice(1)}, computer chose ${computer.charAt(0).toUpperCase()+computer.slice(1)}. You lost!`;
    score.textContent = `Player ${playerScore} : ${computerScore} Computer`;
    } else if (player == "rock" && computer == "scissors" ||
                player == "paper" && computer == "rock" ||
                player == "scissors" && computer == "paper") {
        playerScore += 1
        result.textContent = `You chose ${player.charAt(0).toUpperCase()+player.slice(1)}, computer chose ${computer.charAt(0).toUpperCase()+computer.slice(1)}. You win!`;
        score.textContent = `Player ${playerScore} : ${computerScore} Computer`;
    } else {
        result.textContent = `You chose ${player.charAt(0).toUpperCase()+player.slice(1)}, computer chose ${computer.charAt(0).toUpperCase()+computer.slice(1)}. This was a draw!`;
        score.textContent = `Player ${playerScore} : ${computerScore} Computer`
    }
    if (playerScore === 5) {
        alert(`You beat the computer and saved the world! You're the best!`)
    } else if (computerScore === 5) {
        alert(`You lost and the computer will take over the world!`)
    }
}

buttons.forEach(function(button) { 
    button.addEventListener("click", playRound)
}
)