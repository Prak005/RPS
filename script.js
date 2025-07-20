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
    if(humanChoice === computerChoice)
        console.log("Tie! Draw Again");
    else if(humanChoice==="rock" && computerChoice==="scissors"){
        console.log("You Win! Rock beats Scissors");
        humanScore++;
    }
    else if(humanChoice==="rock" && computerChoice==="paper"){
        console.log("You Lose! Paper beats Rock");
        computerScore++;
    }
    else if(humanChoice==="scissors" && computerChoice==="rock"){
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
    }
    else if(humanChoice==="scissors" && computerChoice==="paper"){
        console.log("You Win! Scissors beats Paper");
        humanScore++;
    }
    else if(humanChoice==="paper" && computerChoice==="rock"){
        console.log("You Win! Paper beats Rock");
        humanScore++;
    }
    else if(humanChoice==="paper" && computerChoice==="scissors"){
        console.log("You Lose! Scissors beats Paper");
        computerScore++;
    }
}