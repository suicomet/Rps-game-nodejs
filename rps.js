let humanScore = 0;
let computerScore = 0;

function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function getComputerChoice (){
    let num = getRandomInt(3)
    if (num === 2) {
        return "paper"
    }
    else if(num === 1){
        return "rock"
    }
    else if(num === 0){
        return "scissors"
    }

}

function playRound (humanChoice, computerChoice){

    if (humanChoice === computerChoice) {
       console.log(`Its a draw! \nPlayer Score: ${humanScore} \nComputer Score: ${computerScore}`)
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        console.log(`Player wins! \nPlayer Score: ${humanScore} \nComputer Score: ${computerScore}`)

    } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        console.log(`Player wins! \nPlayer Score:${humanScore} \nComputer Score: ${computerScore}`)
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        console.log(`Player wins! \nPlayer Score: ${humanScore} \nComputer Score: ${computerScore}`)
    } else{
        computerScore++;
        console.log(`Computer wins! \nPlayer Score: ${humanScore} \nComputer Score: ${computerScore}`)
    }
    document.querySelector(".player-score").innerText = `Player Score: ${humanScore}`;
    document.querySelector(".computer-score").innerText = `Computer Score: ${computerScore}`
    playGame()
    
}

function playGame(){
    const divResults = document.getElementById("div-results");
    const h3Result = document.createElement("h3");

    if (humanScore === 5){
        console.log(`The game is over! Player wins!\nFinal Scores:\nPlayer: ${humanScore}\nComputer: ${computerScore}`);
        disableBtns();
        h3Result.textContent = "Player wins!";
        divResults.appendChild(h3Result);
    } else if (computerScore === 5){
        console.log(`The game is over! Computer wins!\nFinal Scores:\nPlayer: ${humanScore}\nComputer: ${computerScore}`);       
        disableBtns();
        h3Result.textContent = "Computer wins!";
        divResults.appendChild(h3Result);
    }

}

function disableBtns(){
    scissorsBtn.disabled = true;
    paperBtn.disabled = true;
    rockBtn.disabled = true;
}

const scissorsBtn = document.querySelector(".scissors-btn");
const paperBtn = document.querySelector(".paper-btn");
const rockBtn = document.querySelector(".rock-btn");

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
})

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
})

rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
})


