/* 
    Setup and Global Variables
*/

var today = new Date();
var outputDays;

/* 
    Input
*/

var inputYear = parseInt(prompt("Tell me the year you were born."));
var inputMonth = parseInt(prompt("Tell me the month you were born."));
var inputDay = parseInt(prompt("Tell me the day you were born."));


var todayYear = today.getFullYear();
var todayMonth = today.getMonth() + 1;
var todayDay = today.getDate();


/*
    Process
*/






/*
    Functions
*/

function calcDaysFromFinishedMonths(months)
{   
    //local variable
    var sumOfDays = 0;

    //array of days of the month
    var monthList = [31,28,31,30,31,30,31,31,30,31,30,31];
    
    //adding days
    for (var i=1; i< months; i++)
    {
        sumOfDays += monthList[i];
    }
    if (isThisALeapYear(inputYear))
        sumOfDays++;
    
    //return days
    return sumOfDays;
}

function calcDaysFromFinishedYears(years)
{
    //local variables
    var sumOfDays = 0;

    //adding days
    for(var i=1; i<=years; i++)
    {
        if(isThisALeapYear(i))
            sumOfDays += 366;
        else
            sumOfDays += 365;
    }

    //return days
    return sumOfDays;
}

function isThisALeapYear(year)
{
    //checks if it is a leap day or not
    if(year % 400 == 0)
        return true;
    else if(year % 100 == 0)
        return false;
    else if(year % 4 == 0)
        return true;
    else
        return false;
}

function calcDaysFromZero(day, month, year)
{
    return day + calcDaysFromFinishedMonths(month) + calcDaysFromFinishedYears(year);
}

outputDays = calcDaysFromZero(todayDay, todayMonth, todayYear) - calcDaysFromZero(inputDay, inputMonth, inputYear);

//How may days from 0-0-0000


document.getElementById("outputDate").innerHTML = outputDays;
document.getElementById("outputDebug").innerHTML = todayDay;
