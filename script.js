
function getComputerChoice(){
    let choice = Math.random();
    if(choice<0.33)
        return "rock";
    else if(choice<0.66)
        return "paper";
    else
        return "scissors";
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    const addRes = document.querySelector("#addRes");
    const res = document.querySelector("#result");
    if(humanChoice === computerChoice){
        addRes.textContent = "😮Tie! Draw Again";
    }
    else if(humanChoice==="rock" && computerChoice==="scissors"){
        addRes.textContent = "🎉You Win! Rock beats Scissors";
        humanScore++;
    }
    else if(humanChoice==="rock" && computerChoice==="paper"){
        addRes.textContent = "😭You Lose! Paper beats Rock";
        computerScore++;
    }
    else if(humanChoice==="scissors" && computerChoice==="rock"){
        addRes.textContent = "😭You Lose! Rock beats Scissors";
        computerScore++;
    }
    else if(humanChoice==="scissors" && computerChoice==="paper"){
        addRes.textContent = "🎉You Win! Scissors beats Paper";
        humanScore++;
    }
    else if(humanChoice==="paper" && computerChoice==="rock"){
        addRes.textContent = "🎉You Win! Paper beats Rock";
        humanScore++;
    }
    else if(humanChoice==="paper" && computerChoice==="scissors"){
        addRes.textContent = "😭You Lose! Scissors beats Paper";
        computerScore++;
    }
    res.appendChild(addRes); 
    score.textContent = "👨Player-1 : "+humanScore+" 🤖PC-arch : "+computerScore;
    getScore.appendChild(score);

    if(humanScore>=3 ){
        addRes.textContent ="";
        final.textContent = "Player-1 Wins!";
        alert("Player-1 Wins!");
        humanScore = 0;
        computerScore = 0;
    }
    if(computerScore>=3 ){
        addRes.textContent ="";
        final.textContent = "PC-arch Wins!";
        alert("PC-arch Wins!");
        humanScore = 0;
        computerScore = 0;
    }
}
const getScore = document.querySelector("#score");
const score = document.querySelector("#play");

const final = document.querySelector("#finalRes");
final.setAttribute("style", "padding-top : 12px; font-weight:900;");

const btn = document.querySelector("#btn");
btn.addEventListener("click", (event) => {
    let target = event.target;
    final.textContent = "";
    switch(target.id){
        case "scissors" : playRound("scissors", getComputerChoice());
                          break;
        case "paper" :playRound("paper", getComputerChoice());
                      break;
        case "rock" : playRound("rock",getComputerChoice());
                      break;
    }
});

const rst = document.querySelector("#reset");
rst.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    addRes.textContent = "";
    final.textContent ="";
    score.textContent = "👨Player-1 : "+humanScore+" 🤖PC-arch : "+computerScore;
});
