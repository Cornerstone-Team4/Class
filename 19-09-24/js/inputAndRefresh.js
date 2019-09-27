var inputArray = [340,1,3,3,76,23,4,12,122,7642,646];

document.getElementById("arrayInput").innerHTML = ("["+inputArray+"]");
document.getElementById("arrayOutput").innerHTML = ("["+inputArray+"]");

function inputPrompt(){
    var i=0;
    inputArray = [];
    do{
        var inputLocal=prompt("Enter number (or leave if blank to end):");
        inputArray[i] = parseInt(inputLocal);
        i++
    }while(inputLocal!="");
    inputArray.pop();
    document.getElementById("arrayInput").innerHTML = ("["+inputArray+"]");
    document.getElementById("arrayOutput").innerHTML = ("["+inputArray+"]");
}

function refreshScreen(output){
    document.getElementById("arrayOutput").innerHTML = ("["+output+"]");
}

