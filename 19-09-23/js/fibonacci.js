var outputFibonacci = [];
var outputLocal = 0;
var nMinus1=1, nMinus2=0;
var inputFib;

function calcFibonacci(input){

    outputFibonacci = [];
    nMinus1 = 1;
    nMinus2 = 0;
    var calcLocal;
    outputFibonacci.push(nMinus2);
    outputFibonacci.push(nMinus1);
    
    for (var i = 0; i < input-1; i++){
        calcLocal = nMinus1 + nMinus2;
        outputFibonacci.push(calcLocal);
        nMinus2 = nMinus1;
        nMinus1 = calcLocal;
    }
    
}

function formatOutput(){
    var outputLocal = [];
    for(i=0; i<outputFibonacci.length-1;i++)
    {
        outputLocal.push(" "+outputFibonacci[i]);
    }
    return outputLocal;
}

function displayFibonacci(){
    inputFib = document.getElementById("inputFibonacci").value;
    calcFibonacci(inputFib);
    document.getElementById("outputFibonacci").innerHTML = formatOutput();
}

function findFibonacci(){
    if(outputFibonacci.length>=1){
        var index = prompt("What is the index of the number in the sequence?");
        index--;
        alert("The number is " + outputFibonacci[index]);
    }else{
        alert("Calculate fibonacci first!");
    }
    
}
