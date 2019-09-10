var errorFlag = false;

var name = prompt("Welcome. Please input your name.")

var englishS = prompt("What is you score in English?");
var mathS = prompt("What is you score in Math?");
var scienceS = prompt("What is you score in Science?");

var englishN = CheckZero(parseFloat(englishS));
var mathN = CheckZero(parseFloat(mathS));
var scienceN = CheckZero(parseFloat(scienceS));




var average = (englishN + mathN + scienceN)/3;
//average = Math.round(average * 100) / 100;
average = average.toFixed(2);

var response
if(average >= 90)
    response = "You are excellent!";
    else if(average >= 80)
    response = "You did a good job.";
    else if(average >= 70)
    response = "Not bad.";
    else 
    response = "Not enough, try again next year.";


document.getElementById("nameOutput").innerHTML = "Hello, " + name + ". This is your score card: <b>"

document.getElementById("englishOutput").innerHTML = "English: " + englishN;
document.getElementById("mathOutput").innerHTML = "Math: " + mathN;
document.getElementById("scienceOutput").innerHTML = "Science: " + scienceN;

document.getElementById("averageOutput").innerHTML = "Average: " + average;
document.getElementById("responseOutput").innerHTML = response;

function CheckZero(number){
    if (number > 100 || number < 0 || number == null){
        number = 0;
        errorFlag = true;
    }
}
