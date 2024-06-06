function my_Dictionary() {
  var Animal = {
    Species: "Dog",
    Color: "Black",
    Breed: "Labrador",
    Age: 5,
    Sound: "Bark!"
  };
  document.getElementById("Dictionary").innerHTML= Animal.Sound;
}

function my_Dictionary() {
  var Cars = {
    Brand: "BMW",
    Color: "Black",
    Make: "5 series",
    Engine: "Automatic"
  };
  delete Cars.Brand;
  document.getElementById("Dictionary").innerHTML = Cars.Brand;
}