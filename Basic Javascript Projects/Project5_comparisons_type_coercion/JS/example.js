
// Wrote a Function testing out NAN
function my_Function() {
  document.getElementById("Test").innerHTML = 0/0;
}

// Wrote a function that makes a false NAN
function my_Test() {
  document.getElementById("False").innerHTML = isNaN("Yo!");
}
// Wrote out a function that make the NAN true
function my_Test2() {
  document.getElementById("True").innerHTML = isNaN(5);
}

// To display infinity number
function pos_Number() {
  document.getElementById("Positive").innerHTML = 2E310;
}

function neg_Number() {
  document.getElementById("Negative").innerHTML = -3E310;
}

console.log(15 > 5);

console.log(12 < 2);

console.log( 2 + 2);

console.log(10 == 10);

console.log(3 == 11);

x = 12;
x = 12;
document.write(x === y);

a = 82;

b = "45";
document.write(a === b);

console.log(5 > 2 && 10 > 4);

console.log(5 > 10 && 10 > 4);

console.log(5 > 10 || 10 > 4);

console.log(5 > 10 || 10 > 20);

function not_Function() {
  document.getElementById("Not").innerHTML = !(20 > 10);
}

function not_Function() {
  document.getElementById("Not").innerHTML = !(5 > 10);
}


// To display a negative infinity number
// document.write(-3E310);