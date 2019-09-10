var firstNumber = prompt("First number");
var secondNumber = prompt("Second number");
var increment = prompt("Increment by how much");

var answer = 0;

var firstNumber = parseFloat(firstNumber);
var secondNumber = parseFloat(secondNumber);
var increment = parseInt(increment);


for(i=firstNumber; i<=secondNumber; i ++){
    if(i%increment == 0)
    answer += i;
}

document.getElementById("answerOutput").innerHTML = answer;