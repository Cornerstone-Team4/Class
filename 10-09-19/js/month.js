var monthNumber = prompt("Tell me a number between 1~12.");
monthNumber = parseInt(monthNumber);
var monthResponse;
var checkFlag = true;

switch (monthNumber){
    case 1:
        monthResponse = "January";
        break;
    case 2:
        monthResponse = "February";
        break;
    case 3:
        monthResponse = "March";
        break;
    case 4: 
        monthResponse = "April";
        break;
    case 5:
        monthResponse = "May";
        break;
    case 6:
        monthResponse = "June";
        break;
    case 7:
        monthResponse = "July";
        break;
    case 8:
        monthResponse = "August";
        break;
    case 9: 
        monthResponse = "September";
        break;
    case 10:
        monthResponse = "October";
        break;
    case 11:
        monthResponse = "November";
        break;
    case 12:
        monthResponse = "December";
        break;
    default:
        monthResponse = "Make sure that it is a number is not between 1~12";
        checkFlag = false;
        break;
}   

if(checkFlag)
document.getElementById("monthOutput").innerHTML = "The month number " + monthNumber + " is called " + monthResponse + ".";
else
document.getElementById("monthOutput").innerHTML = monthResponse;
