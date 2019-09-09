function callDay(){
    var today = new Date();
    var currentHour = today.getHours();
    if(currentHour > 18 && currentHour < 22)
        document.getElementById("output").innerHTML ="Good Evening";
    else if(currentHour > 12)
        document.getElementById("output").innerHTML ="Good Afternoon";
    else if(currentHour > 6)
        document.getElementById("output").innerHTML ="Good Morning";
    else
        document.getElementById("output").innerHTML ="Welcome";
}
callDay();