function getComputerChoice(){
    let choice = Math.random();
    if(choice<0.33)
        return "rock";
    else if(choice<0.66)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice(){
    let choice = prompt("Enter Choice","rock");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
}