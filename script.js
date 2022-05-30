let player = "";
let computer = "";

function computerGuess() {
    computer = Math.floor(Math.random()*3+1);
    if (computer === 1) {
        computer = "rock";
    } else if (computer === 2) {
        computer = "paper";
    } else {
        computer = "scissors";
    }
    console.log(computer)
}