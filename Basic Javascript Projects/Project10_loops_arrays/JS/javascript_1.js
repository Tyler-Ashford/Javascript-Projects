function basketball_Function() {
  var basketball_Output;
  var basketball = document.getElementById("basketball_Input").value;
  var basketball_String = " is a great team!";
  switch(basketball) {
    case "Bulls":
      basketball_Output = "Bulls" + basketball_String;
      break;

    case "Lakers":
      basketball_Output = "Lakers"  + basketball_String;
      break;
    
    case "Heat":
      basketball_Output = "Heat"  + basketball_String;
      break;

    case "Bucks":
      basketball_Output = "Bucks" + basketball_String;
      break;
      
    case "Knicks":
      basketball_Output = "Knicks"  + basketball_String;
      break;
      
    case "Celtics":
      basketball_Output = "Celtics" + basketball_String;
      break;
      default:
      basketball_Output = "Please enter team name as you see on the list";    
  }
  document.getElementById("Output").innerHTML = basketball_Output;
}