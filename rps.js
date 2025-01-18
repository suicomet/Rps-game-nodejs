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


function getHumanChoice (callback){
    const readline = require ("readline");
    const rl = readline.createInterface({input: process.stdin, output: process.stdout});
    rl.question("Select between: <rock>, <paper>, <scissors> ", (input) =>{
        rl.close();
        callback(input.toLowerCase());
    
    }) 
}

function playRound (humanChoice, computerChoice){

    if (humanChoice === computerChoice) {
       return console.log(`Its a draw! \nPlayer Score: ${humanScore} \nComputer Score: ${computerScore}`)
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        return console.log(`Player wins! \nPlayer Score: ${humanScore} \nComputer Score: ${computerScore}`)

    } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        return console.log(`Player wins! \nPlayer Score:${humanScore} \nComputer Score: ${computerScore}`)
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return console.log(`Player wins! \nPlayer Score: ${humanScore} \nComputer Score: ${computerScore}`)
    } else{
        computerScore++;
        return console.log(`Computer wins! \nPlayer Score: ${humanScore} \nComputer Score: ${computerScore}`)
    }
}


let humanScore = 0;
let computerScore = 0;

function playGame(rounds){

    if (rounds === 0){
        console.log(`The game is over!\nFinal Scores:\nPlayer: ${humanScore}\nComputer: ${computerScore}`);
        return;
    }

    getHumanChoice((humanChoice) => {
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`\nRounds left: ${rounds - 1}\n`);
        playGame(rounds - 1);
        
    });
}
playGame(5);
