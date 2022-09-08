//uncaught syntax error - answer has already been declared
const operatorSet = new Set(["+", "-", "x", "/", "="]);
let expressionArray = [];
let numString = "";
let answer = 0;
const buttons = document.querySelectorAll("button");
const outputBox = document.getElementById("output-box");

buttons.forEach(function (button) {
  button.addEventListener("click", storeNum);
});

/*taskListItem.addEventListener("contextmenu", (e) => { 
  e.preventDefault();*/

function storeNum(event) {
  //event.preventDefault();
  let n = event.target.value;
  if (n === "C") {
    n = "";
    clearOutputBox();
  }

  if (!operatorSet.has(n)) {
    numString = numString + n;
    console.log("number: ", numString);
    console.log(expressionArray);
  }

  if (operatorSet.has(n)) {
    expressionArray.push(numString);
    expressionArray.push(n);
    numString = "";
    console.log("operator: ", n);
    console.log("expressionArray: ", expressionArray);
  }
  outputBox.value = numString;
  if (typeof expressionArray[2] !== "undefined") {
    lastExpression();
  } else if (n == "=") {
    lastExpression();
  }
}

function lastExpression() {
  //check if expressionArray[1] = '=' and remove it if it is;
  if (expressionArray[1] == "=") {
    expressionArray.shift();
  }

  num1 = parseFloat(expressionArray[0]);
  operator = expressionArray[1];
  num2 = parseFloat(expressionArray[2]);
  answer = calculate(num1, operator, num2);
  outputBox.value = answer;
  expressionArray.splice(0, 3);
  console.log("expressionArray post splice: ", expressionArray);
  expressionArray.unshift(answer);
  console.log("expressionArray post push: ", expressionArray);
}

function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
      break;

    case "-":
      return num1 - num2;
      break;

    case "x":
      return num1 * num2;
      break;

    case "/":
      return num1 / num2;
    default:
      console.log("Something went wrong :-(");
  }
}

function clearOutputBox() {
  document.getElementById("output-box").value = "";
  expressionArray = [];
  numString = "";
}
