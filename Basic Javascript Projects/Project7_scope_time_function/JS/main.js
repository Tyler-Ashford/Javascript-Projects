var X = 10;
function Add_numbers_1() {
  document.write(20 + X + "<br>");
}

function Add_numbers_2() {
  document.write(X + 100);
}

Add_numbers_1();
Add_numbers_2();

function get_Date() {
  if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
  }
}

function get_Time() {
  if (new Date().getMonth() < 6) {
    document.getElementById("Month").innerHTML = "What month is it today?";
  }
}

function Age_Function() {
  Age = document.getElementById("Age").value;
  if (Age >= 18) {
    Vote_age = "You are old enough to vote!";
  }
  else {
    Vote_age = "You are not old enough to vote!";
  }
  document.getElementById("How_old?").innerHTML = Vote_age;
}

function time_Function() {
  var Time = new Date().getHours();
  var message;
  if (Time < 12 == Time > 0) {
    message = "It is morning time!";
  }
  else if (Time >= 12 == Time < 18) {
    message = "It is the afternoon.";
  }
  else {
    message = " It is the evening time."
  }
  document.getElementById("Time_of_day").innerHTML = message;
}