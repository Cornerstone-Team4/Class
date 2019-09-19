/* 
    Setup and Global Variables
*/


var today = new Date();


/* 
    Variables
*/

//input variables
var inputPrompt;
var inputYear;
var inputMonth;
var inputDay;

//today variables
var todayInput;
var todayYear;
var todayMonth;
var todayDay;

//output variables
var outputDays;
var outputLeapYears;
var outputWeekday;

/*
    Process
*/

inputPrompt = promptInput();
todayInput = todayInput();

//inputs and today
inputYear = inputPrompt.years;
inputMonth = inputPrompt.months;
inputDay = inputPrompt.days;

todayYear = todayInput.years;
todayMonth = todayInput.months;
todayDay = todayInput.days;


//actual calculations
outputDays = calcDaysFromDay1(todayDay, todayMonth, todayYear) - calcDaysFromDay1(inputDay, inputMonth, inputYear);
outputLeapYears = calcLeapYearsFromDay1(todayYear) - calcLeapYearsFromDay1(inputYear);
outputWeekday = checkWeekday(inputYear, inputMonth, inputDay);

//show on screen
document.getElementById("outputDate").innerHTML = "The date in question was " + outputDays + " days ago.";
document.getElementById("outputLeapYears").innerHTML = "It has been " + outputLeapYears + " leap years since that.";
document.getElementById("outputWeekday").innerHTML = "The date in question was a " + outputWeekday + ".";
