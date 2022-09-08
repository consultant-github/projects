let guessArray = [];
let guesses = 0;

function sinkScenario() {
  leftPoint = midPoint - 1;
  rightPoint = midPoint + 1;
  return leftPoint, rightPoint;
}

document.getElementById("newGameBtn").addEventListener("click", () => {
  guessInput = "";
  guessList.textContent = "";
  guessInputString = '';
  comment.textContent = "";
  hits = 0;
  guesses = 0;
  guessArray = [];
  midPoint = Math.floor((Math.random() * 8) + 2); 
  return midPoint;
});

document.getElementById("submitBtn").addEventListener("click", () => {
  let invalidInput = 0;
  let guessInputString = "";
  
  if (guesses == 0) {
    sinkScenario();   
  }

  let guessInput = document.getElementById("guessInput");
  comment.textContent = "";
  
  
  if (guessInput.value < 1 || guessInput.value > 10) {
    document.getElementById("comment").textContent = "Please enter an integer between 1 and 10.";
    guessInputString = '';
    invalidInput = 1;
  }
  
  else if (guessArray.includes(guessInput.value)){
    invalidInput = 1;
    document.getElementById("comment").textContent = "You already entered " + guessInput.value + ". Please try again.";
  }
  else {
    invalidInput = 0;
    guessArray.push(guessInput.value);
    guessInputString = '';
    guessInputString = guessInput.value;
    let guessList = document.getElementById("guessList");
    let guessListItem = document.createElement("li");
    guesses++;

  if (guessInput.value == midPoint || guessInput.value == leftPoint || guessInput.value == rightPoint) {
    guessInputString = guessInputString + " hit";
    hits++;
  }
  else { guessInputString = guessInputString + " miss"; }
  guessListItem.append(guessInputString);

  if (hits == 3) {
    document.getElementById("comment").textContent = "You sank my ship in " + guesses + " attempts.";
  }
    guessList.append(guessListItem);
  guessInput.value = "";
}
});
