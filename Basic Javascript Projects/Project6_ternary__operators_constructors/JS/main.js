function ride_Function() {
  var Height, Can_ride;
  Height = document.getElementById("Height").ariaValueMax;
  Can_ride = (Height > 52) ? "You are too short":"You are tall enough";
  document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function vote_Function() {
  var Age, Can_Vote;
  Age = document.getElementById("Age").ariaValueMAx;
  Can_Vote = (Age > 18) ? "You are to young to vote":"You are old enough";
  document.getElementById("Vote").innerHTML = Can_Vote + " to vote!";
}

// Example of Keyword and Constructors
// This is a object constructor function
function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, " Red");
var Emily = new Vehicle("Jeep", "Trial Hawk", 2019, "White");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function my_Function() {
  document.getElementById("Keyword_and_Constructors").innerHTML =
  "Erik drives a " +Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year; 
}
// Objected Constructor
function Person(first, last, age, eye) {
  this.firtsname = first;
  this.lastname = last;
  this.age = age;
  this.eyeColor = eye;
}
// using the new keyword to call the object person
var myFather = new Person("Robert", "Vaughters", 59, "Brown");
var myMother = new Person("Regina", "Ashford", 58, "Brown");
var mySister = new Person("Marnee", "Vaughters", 34, "Brown");
var myBrother = new Person("Tarik", "Vaughters", 32, "Brown");
function my_Info() {
  document.getElementById("New_and_This").innerHTML = "I have a sister named " + mySister.firtsname + " who is " + mySister.age + " years old " + "and has a eye color of " + mySister.eyeColor + ". " ;
}
// nested Function
function count_Function() {
  document.getElementById("Nested_Function").innerHTML = Count();
  function Count() {
    var starting_Point = 20;
    function Plus_one() {starting_Point += 2;}
    Plus_one();
    return starting_Point;
  }
}