/*
    Functions
*/

function calcDaysFromFinishedDays(days)
{
    var sumOfDays = 0;

    sumOfDays = days - 1;

    return sumOfDays;
}

function calcDaysFromFinishedMonths(months)
{   
    //local variable
    var sumOfDays = 0;

    //array of days of the month
    var monthList = [31,28,31,30,31,30,31,31,30,31,30,31];
    
    //adding days
    for (var i=0; i< months; i++)
    {
        sumOfDays += monthList[i];

        if (i == 1 && isThisALeapYear(inputYear))
            sumOfDays++;  
    }
    
    //return days
    return sumOfDays;
}

function calcDaysFromFinishedYears(years)
{
    //local variables
    var sumOfDays = 0;

    //adding days
    for(var i=1; i<years; i++)
    {
        if(isThisALeapYear(i))
            sumOfDays += 366;
        else
            sumOfDays += 365;
    }

    //return days
    return sumOfDays;
}

function calcLeapYearsFromDay1(years)
{
    //local variables
    var leapYears = 0;

    //adding days
    for(var i=1; i<=years; i++)
    {
        if(isThisALeapYear(i))
            leapYears += 1;
    }

    //return days
    return leapYears;
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

function calcDaysFromDay1(day, month, year)
{
    return calcDaysFromFinishedDays(day) + calcDaysFromFinishedMonths(month) + calcDaysFromFinishedYears(year);
}

function promptInput()
{
    return {
        years: parseInt(prompt("Tell me the year in question.")), 
        months: parseInt(prompt("Tell me the month in question.")),
        days: parseInt(prompt("Tell me the day in question.")),
    }
}

function todayInput()
{
    return {
        years: today.getFullYear(), 
        months: today.getMonth() + 1,
        days: today.getDate(),
    }
}

function checkWeekday(year,month,day)
{
    var localWeekday;
    var localDate = new Date(year+"-"+month+"-"+day)
    
    switch(localDate.getDay())
    {

        case 0: 
            localWeekday = "Monday"; 
            break;
        case 1: 
            localWeekday = "Tuesday"; 
            break;
        case 2: 
            localWeekday = "Wednesday"; 
            break;
        case 3: 
            localWeekday = "Thursday"; 
            break;
        case 4: 
            localWeekday = "Friday"; 
            break;
        case 5: 
            localWeekday = "Saturday"; 
            break;
        case 6: 
            localWeekday = "Sunday"; 
            break;
    }
    return localWeekday;
}