function bubbleCompareAndSortNumbersInTheArray(array, startIndex){
    
    for(var j=startIndex; j<array.length-1; j++)
    {
        console.log("Inside loop: "+j);
        console.log("Comparing "+array[j]+" and "+array[j+1]);
        if(array[j]>array[j+1]){
            swapNumbersInTheArray(array,j,j+1);
            console.log("Swapped numbers.");
        }else{
            console.log("Did not swap numbers.");
        }
    }

}

function swapNumbersInTheArray(array, index1, index2)
{
    var aux;
    aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
}

function bubbleSort(arrayInput)
{
    var outputBubble = arrayInput;
    for(var i=0; i<outputBubble.length-1;i++)
    {   
        console.log("Outside loop: "+i);
        bubbleCompareAndSortNumbersInTheArray(outputBubble,i);
    }
    return outputBubble;
}

function onClickBubble(){
    refreshScreen(bubbleSort(inputArray));
        
}