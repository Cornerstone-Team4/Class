var englishS = prompt("What is you score in English?");
var mathS = prompt("What is you score in Math?");
var scienceS = prompt("What is you score in Science?");

var englishN = parseFloat(englishS);
var mathN = parseFloat(mathS);
var scienceN = parseFloat(scienceS);


var average = (englishN + mathN + scienceN)/3;
average = Math.round(average * 100) / 100;

var response
if(average >= 90)
    response = "You are excellent!";
    else if(average >= 80)
    response = "You did a good job.";
    else if(average >= 70)
    response = "Not bad.";
    else 
    response = "Not enough, try again next year.";


document.getElementById("englishOutput").innerHTML = "English: " + englishN;
document.getElementById("mathOutput").innerHTML = "Math: " + mathN;
document.getElementById("scienceOutput").innerHTML = "Science: " + scienceN;

document.getElementById("averageOutput").innerHTML = "Average: " + average;
document.getElementById("responseOutput").innerHTML = response;


