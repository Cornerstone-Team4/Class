var outputPi = 0;
var outputLocal = 0;
var i=1;
var reverseFlag = true;
var inputPi;

function piRecursive (input)
{
    if(i < 2*input)
    {
        console.log("step "+i);
        i += 2;
        if(reverseFlag){
            outputLocal = outputLocal - (1/i) ;
            console.log("output subtracted by 1/"+i);
        }
        else{
            outputLocal = outputLocal + (1/i) ;
            console.log("output added by 1/"+i);            
        }
        reverseFlag = !reverseFlag;
        console.log("reverse state is "+reverseFlag);
        piRecursive(input);
    }else{
        outputPi = 4*(1 + outputLocal);
        return outputPi;
    }
}

function piStandard(input)
{
    outputLocal = 0;
    for(i = 1; i<4*input; i += 4)
    {
        outputLocal = outputLocal + (1/i) - (1/(i+2));
    }
    outputPi = 4 * outputLocal;
}

function displayPi(){
    inputPi = document.getElementById("inputPi").value;
    if(inputPi > 99999)
        alert("Since the number was very high, it might take a while. Try and be patient.")
    piStandard(inputPi);
    document.getElementById("outputPi").innerHTML = outputPi;
}

function findPi(){
    if(outputPi > 0){
        var index = prompt("What decimal do you want the value of?");
        var aux = outputPi*Math.pow(10,index);
        aux = aux % 10 - aux % 1;
        alert("The number is " + aux);
    }else{
        alert("Calculate Pi first!");
    }
    
}
