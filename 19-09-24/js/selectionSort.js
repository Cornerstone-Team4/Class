function selectionCompareNumbersInTheArray(array, startIndex)
{
    var comparingNum = Infinity;
    var comparingInd = 0;

    for(var i=startIndex; i<=array.length; i++)
    {
        console.log("loop inside: "+i);
        if(array[i] < comparingNum){
            comparingNum = array[i];
            comparingInd = i;
        }
    }
    return {
        number: comparingNum,
        index: comparingInd,
    }
}

function swapNumbersInTheArray(array, index1, index2)
{
    var aux;
    aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
}

function selectionSort(array)
{
    var outputSelection = array;
    for(var j=0; j<outputSelection.length; j++)
    {
        console.log("loop outside: "+j);
        var auxSort = selectionCompareNumbersInTheArray(outputSelection, j);
        if(auxSort.index != j){
            swapNumbersInTheArray(outputSelection, auxSort.index, j);
        }
    }
    return outputSelection;
}

function onClickSelection(){
    refreshScreen(selectionSort(inputArray));
        
}