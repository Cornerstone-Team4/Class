function mergeSplit (inputArray)
{
    //doesn't run is already splited all the way the array
    if(inputArray.length == 1)
        return inputArray;

    //const cannot be changed, and only lasts until the end of the statement
    const middle = Math.floor(inputArray.length/2);
    //splits the array in two temporary arrays
    const leftArray = inputArray.slice(0,middle);
    const rightArray = inputArray.slice(middle);

    console.log("leftArray spliting: "+leftArray);
    console.log("rightArray spliting: "+rightArray);
    
    //merges back the splited arrays
    return mergeWhileSorting( 
        mergeSplit(leftArray), 
        mergeSplit(rightArray)
        );//if the array is length==1, runs merge, else the split would happen again
}

function mergeWhileSorting(leftArray, rightArray){
    let outputArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    //runs concat for every member in the concatening arrays
    while(leftIndex < leftArray.length && rightIndex < rightArray.length)
    {
        if(leftArray[leftIndex]<rightArray[rightIndex]){
            outputArray.push(leftArray[leftIndex]); //concat left
            leftIndex++; //move left array cursor 
            console.log("leftArray joining: "+outputArray);    
        }else{
            outputArray.push(rightArray[rightIndex]); //concat right
            rightIndex++; //move right array cursor
            console.log("rightArray joining: "+outputArray);
        }
    }
    //concats the leftover from left or right
    return outputArray
        .concat(leftArray.slice(leftIndex))
        .concat(rightArray.slice(rightIndex));
}

function onClickMerge(){
    //var output = selectionSort(inputArray);
    refreshScreen(mergeSplit(inputArray));    
    console.log("button clicke: Merge");
}