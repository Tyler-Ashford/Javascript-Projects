function Call_Loop() {
  var Num = ""
  var X = 1;
  while (X < 21) {
    Num += "<br>" + X;
    X++;
  }
  document.getElementById("Loop").innerHTML = Num;
}

var Instruments = ["Drums", "Bass", "Violin", "Flute", "Trumpet"];
var Content = "";
var X;
function for_Loop() {
  for (X = 0; X < Instruments.length; X++) {
    Content += Instruments[X] + "<br>";
  }
  document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
  var Car_Picture = [];
  Car_Picture[0] = "going fast";
  Car_Picture[1] = "going slow";
  Car_Picture[2] = "stopped";
  Car_Picture[3] = "slowed down";
  document.getElementById("Array").innerHTML = "In this picture, the car is " + Car_Picture[1] + ".";
}

function constant_Function() {
  const Car_Brands = {type: "X5M", make:"BMW", color:"Black"};
  Car_Brands.color = "White";
  Car_Brands.price = "$140,000";
  document.getElementById("Constant").innerHTML = " The cost of the " + Car_Brands.type + " was " + Car_Brands.price + " and " + " the color was " + Car_Brands.color + ".";
}

let x = 100;
document.write("<br>" + x);

let car = {
  make: "Rivian",
  model: "R1S",
  year: "2024 Ascend",
  color: "Silver",
  description: function() {
    return this.year + " " + this.color + " " + this.make + " " + this.model;
  }
};

document.getElementById("Car_Object").innerHTML = car.description();


let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;
