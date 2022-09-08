const gameBtns = document.querySelectorAll("[type=image]");
let computerChoice;
let playerChoice;
    gameBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const playerChoiceDisplay = e.target.textContent .toLowerCase();
        playerChoice = btn.value
        getComputerChoice();
        determineWinner(playerChoice, computerChoice);
    });
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    if(computerChoice == "rock"){document.getElementById("computer-choice").textContent = "Computer picked rock"};
    if(computerChoice == "paper"){document.getElementById("computer-choice").textContent = "Computer picked paper"};
    if(computerChoice == "scissors"){document.getElementById("computer-choice").textContent = "Computer picked scissors"};
    if(playerChoice == "rock"){document.getElementById("player-choice").textContent = "Player picked rock"};
    if(playerChoice == "paper"){document.getElementById("player-choice").textContent = "Player picked paper"};
    if(playerChoice == "scissors"){document.getElementById("player-choice").textContent = "Player picked scissors"};
}

//document.getElementByID("computer-choice").textContent = 

function determineWinner(playerChoice, computerChoice) {
    let results = document.getElementById("results");
    
    if (
        (playerChoice === "rock" && computerChoice === "scissors") || 
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) { 
        results.textContent = "Player won";
    }
    else if (        
        (computerChoice === "rock" && playerChoice === "scissors") || 
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) { 
      results.textContent = "Computer won";
    } else {
        results.textContent = "Tie";
    }
}
function clearResult() {
  document.getElementById("computer-choice").textContent = "";
  document.getElementById("player-choice").textContent = "";
  document.getElementById("results").textContent = "";
}
