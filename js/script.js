function computerPlay() {
    let randNum = Math.floor(Math.random()*3);
    //console.log(randNum);
    if (randNum == 0) {
        return "rock";
    }
    else if (randNum == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function round (playerSeleciton, computerSelection) {
    if (playerSeleciton == computerSelection) {
        return "tie";
    }
    else if (playerSeleciton == "rock" && computerSelection == "paper") {
        return "loss";
    }
    else if (playerSeleciton == "rock" && computerSelection == "scissors") {
        return "win";
    }
    else if (playerSeleciton == "scissors" && computerSelection == "paper") {
        return "win";
    }
    else if (playerSeleciton == "scissors" && computerSelection == "rock") {
        return "loss";
    }
    else if (playerSeleciton == "paper" && computerSelection == "rock") {
        return "win";
    }
    else if (playerSeleciton == "paper" && computerSelection == "scissors") {
        return "loss";
    }

 

}

let userScore = 0;
let computerScore = 0;
let roundNumber = 0;


function playRound() {
    const playerSelection = this.id;
    console.log(playerSelection);
    if (playerSelection == "reset") {
        userScore = 0;
        computerScore = 0;
        roundNumber = 0;
        document.getElementById("userScore").innerHTML = userScore;
        document.getElementById("compScore").innerHTML = computerScore;
        document.getElementById("bMessage").innerHTML = "The game has been reset...";

    }
    const computerSelection = computerPlay();
    const result = round(playerSelection, computerSelection);

    if (result == "win") {
        userScore++;
        roundNumber++;
        document.getElementById("userScore").innerHTML = userScore;
        document.getElementById("compScore").innerHTML = computerScore;
        document.getElementById("bMessage").innerHTML = "You win round " + roundNumber  + "!";

    }
    else if (result == "loss") {
        computerScore++;
        roundNumber++;
        document.getElementById("userScore").innerHTML = userScore;
        document.getElementById("compScore").innerHTML = computerScore;
        document.getElementById("bMessage").innerHTML = "You lost round "+ roundNumber+ "!";

    }
    else if (result == "tie") {
        roundNumber++;
        document.getElementById("userScore").innerHTML = userScore;
        document.getElementById("compScore").innerHTML = computerScore;
        document.getElementById("bMessage").innerHTML = "It's a tie for round "+ roundNumber+ "!";

    }
}

const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach(button => button.addEventListener('click', playRound)); 






