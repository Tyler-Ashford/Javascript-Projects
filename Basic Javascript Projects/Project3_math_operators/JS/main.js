function addition_Function() {
  var addition = 2 + 2;
  document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function sub_Function() {
  var Subtraction = 5 - 3;
  document.getElementById("Math").innerHTML = "5 - 3 = " + Subtraction;
}


function multi_Function() {
  var multiplication = 6 * 3;
  document.getElementById("Math").innerHTML = "6 * 3 = " + multiplication;
}

function div_Function() {
  var divsion = 6 / 3;
  document.getElementById("Math").innerHTML = "6 / 3 = " + divsion;
}

function modulus_Operator() {
  var simple_math = 25 % 6;
  document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math;
}

function ngeative_Number() {
  var x = -15;
  document.getElementById("Math").innerHTML = -x;
}

var X = 10;
X++;
document.write(X);

var z = 12;
z--;
document.write(z);

function makeCar() {
  console.log("Making car...");
}

makeCar();

window.alert(Math.random());

window.alert(Math.random() * 100);

window.alert(Math.round(4.5));