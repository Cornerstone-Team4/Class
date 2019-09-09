var name = prompt("What is your name?");
var hour;
var age = prompt("What is your age?");
var ageResponse;

function callDay(){
    var today = new Date();
    var currentHour = today.getHours();
    if(currentHour > 18 && currentHour < 22)
        hour ="good evening";
    else if(currentHour > 12)
        hour ="good afternoon";
    else if(currentHour > 6)
        hour ="good morning";
    else
        hour ="welcome";
}
callDay();

function calculateAge(){
    if(age > 100)
    ageResponse = "You lived too long!";
    else if(age > 30)
    ageResponse = "You can get married now!";
    else if(age > 10)
    ageResponse = "You need to study hard!";
    else 
    ageResponse = "You should play with your toys!";

}
calculateAge();

document.getElementById("output1").innerHTML = "Hi " + name + ", " + hour + ". <br> Nice to meet you!";

document.getElementById("output2").innerHTML = ageResponse;

