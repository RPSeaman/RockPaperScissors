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
    if (playerSeleciton.toLowerCase() == computerSelection.toLowerCase()) {
        console.log("This was a tie. Play again!");
        return "tie";
    }
    else if (playerSeleciton.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
        console.log( "Computer wins! Paper beats Rock.");
        return "loss";
    }
    else if (playerSeleciton.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        console.log( "You win! Rock beats Scissors.");
        return "win";
    }
    else if (playerSeleciton.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
        console.log( "You win! Scissors beats Paper.");
        return "win";
    }
    else if (playerSeleciton.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {
        console.log( "Computer wins! Rock beats Scissors.");
        return "loss";
    }
    else if (playerSeleciton.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        console.log( "You win! Paper beats Rock.");
        return "win";
    }
    else if (playerSeleciton.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
        console.log( "Computer wins! Scissors beats Paper.");
        return "loss";
    }

 

}

function game() {
    let userScore = 0;
    let compScore = 0;
    for (let i=0;i<5;i++){
        let playerSeleciton = prompt("Rock, Papers, or Scissors?");
        let roundResult = round(playerSeleciton,computerPlay());
        if (roundResult == "win"){
            userScore++;
        }
        else if (roundResult == "loss"){
            compScore++;
        }
        console.log("You have: " + userScore + " points. Computer has:" + compScore + " points.");
    }
    if (userScore > compScore) {
        console.log("YOU WIN!");
    }
    else if (compScore > userScore){
        console.log("you loose.....");
    }
    else if (userScore == compScore){
        console.log("Tie Game")
    }
}

game()

//console.log(computerPlay());