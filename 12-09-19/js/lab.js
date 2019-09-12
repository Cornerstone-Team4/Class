//------------------Calc------------------------------
var firstNumberCalc;
var secondNumberCalc;
var outputCalc;

function clickMultiply(){
    firstNumberCalc = document.getElementById("firstNumberCalc").value;
    secondNumberCalc = document.getElementById("secondNumberCalc").value;
    outputCalc = parseInt(firstNumberCalc * secondNumberCalc);
    document.getElementById("outputCalc").innerHTML = outputCalc;
}

function clickDivide(){
    firstNumberCalc = document.getElementById("firstNumberCalc").value;
    secondNumberCalc = document.getElementById("secondNumberCalc").value;
    outputCalc = parseInt(firstNumberCalc / secondNumberCalc);
    document.getElementById("outputCalc").innerHTML = outputCalc;
}

//----------------Conv------------------------------------
var poundConv;
var kgConv;
var outputPoundConv;
var outputKgConv


function weightConverterKg(inputKg){
    outputPoundConv = inputKg * (2.2);
    document.getElementById("outputKgConv").innerHTML = outputPoundConv;
}

function weightConverterPounds(inputPounds){
    outputKgConv = inputPounds / (2.2);
    document.getElementById("outputPoundsConv").innerHTML = outputKgConv;
}

//--------------Array--------------------

function sortPrompt(){
    var sortInput;
    var sortArray = [];
    sortInput = document.getElementById("inputArray").innerHTML;
    sortArray = sortInput.split(",");
    document.getElementById("outputArray").innerHTML = sortArray.sort().toString();
}

function reversePrompt(){
    var sortInput;
    var sortArray = [];
    sortInput = document.getElementById("inputArray").innerHTML;
    sortArray = sortInput.split(",");
    document.getElementById("outputArray").innerHTML = sortArray.sort().reverse().toString();
}



//------------Table--------------------

var tableNumber;
var outputTable;

function tablePrompt()
{
    tableNumber = parseInt(prompt("Tell me a number from 1 to 10"));
    generateTable();
    document.getElementById("outputTable").innerHTML = outputTable;
}

function generateTable()
{
    var i;
    outputTable = "";
    for (i=1; i <= 10; i++) 
    {
        outputTable += tableNumber + "x" + i + " = " + tableNumber*i + "<br>";
    }
}


//------------Factorial---------------

var facNumber;
var outputFac;

function facPrompt()
{
    facNumber = parseInt(prompt("Tell me a number, I'll tell you the factorial"));
    outputFac = factorialize(facNumber);
    document.getElementById("outputFac").innerHTML = outputFac;
}

function factorialize(num) 
{
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
}