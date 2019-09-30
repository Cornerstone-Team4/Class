/* 
    Input
*/

var name = prompt("What is your name");
var firstNumber = parseInt(prompt("Tell me the first number."));
var secondNumber = parseInt(prompt("Tell me the second number."));
var symbol = prompt("Tell me the symbol of the operation. (*, /, +, -)");
var outputCalc;
var symbolName;
/*
    Condition and Process
*/

switch (symbol){
    case "*":
        outputCalc = firstNumber * secondNumber;
        symbolName = "multiplication";
        break;
    case "/":
        outputCalc = firstNumber / secondNumber;
        symbolName = "division";
        break;
    case "+":
        outputCalc = firstNumber + secondNumber;
        symbolName = "addition";
        break;
    case "-":
        outputCalc = firstNumber - secondNumber;
        symbolName = "subtraction";
        break;
    default:
        outputCalc = "Choose an availabe operation (*, /, +, -)";
        symbolName = "invalid";
}

/*
    Output
*/

if (symbolName != "invalid")
document.getElementById("outputCalc").innerHTML = "Hi "+name+", the answer to the "+symbolName+" of "+firstNumber+" and "+secondNumber+" is "+ parseFloat(outputCalc)+".";
else
document.getElementById("outputCalc").innerHTML = outputCalc;