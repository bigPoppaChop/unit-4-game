$(document).ready(function () {

  // Start a new game when the page loads
  newGame();

  //Establish Global variables when game is loaded
  var wins = 0;
  var losses = 0;
  var counter = 0;
  // Game Logic

  // Event listener for when an orb is clicked
  $(".orb").on("click", function() {
    
    // Assign the orbs value
    var goalValue = parseInt($("#goalTotal").text());
    var crystalValue = parseInt($(this).attr("data-value"));
    console.log(crystalValue);
    
    // Add that amount to the total
    counter += crystalValue;
    console.log("Current Total: " + counter);
    // Print updated total to HTML
    $("#currentTotal").text(counter);

    if(counter === goalValue){
      wins++;
      $("#Wins").text("Win: " + wins);
      alert("YOU WIN! Press OK to play again!")
      newGame();
    }
    else if(counter > goalValue){
      losses++;
      $("#Losses").text("Lose: " + losses);
      alert("YOU FAILED! Press OK to try again!")
      newGame();
    }
  });

  

  // Function used to generate a new game
  function newGame() {

    // Choosing the orb images and assigning their values
    // Used method found at: https://stackoverflow.com/a/38571132/11215238
    // 1. Establish Array
    var orbs = ["Aegis", "Aether", "Blight", "Energy", "Heart", "Linkens", "Lotus", "Octarine", "Venom", "Points", "Refresher", "Shadow", "Soul", "Ultimate", "Vitality"];
    // 2. Shuffle the array
    // Sorry if arrow functions weren't in the scope of this project.
    // It's just the easiest way to shuffle the array
    const shuffled = orbs.sort(() => 0.5 - Math.random());
    // 3. Use .slice() to take the first 4 itmes
    let selected = shuffled.slice(0, 4);

    // 4. Place into the filepath name of the img source, alt info and the labels
    $("#orb1IMG").attr("src", "assets/images/orbs/" + selected[0] + ".png").attr("alt", selected[0]);
    $("#orb1Label").text(selected[0]);
    $("#orb2IMG").attr("src", "assets/images/orbs/" + selected[1] + ".png").attr("alt", selected[1]);
    $("#orb2Label").text(selected[1]);
    $("#orb3IMG").attr("src", "assets/images/orbs/" + selected[2] + ".png").attr("alt", selected[2]);
    $("#orb3Label").text(selected[2]);
    $("#orb4IMG").attr("src", "assets/images/orbs/" + selected[3] + ".png").attr("alt", selected[3]);
    $("#orb4Label").text(selected[3]);

    //Generate Goal Amount between 19 and 120
    var goalTotal = Math.floor((Math.random() * 120) + 19);
    // * 100 to set range of 100 integers. +20 to move it from 0-100 to 19-120
    console.log("Goal Amount: " + goalTotal);
    // Set amount to the required power div
    $("#goalTotal").text(goalTotal);

    // Clear current total
    $("#currentTotal").text("0");
    counter = 0;

    //Generate values of each orb between 1 and 12
    //Then sets it as the orb img's data-value
    var orb1Val = Math.floor(Math.random() * 12) + 1
    console.log("First orb worth: " + orb1Val);
    $("#orb1IMG").attr("data-value", orb1Val);
    var orb2Val = Math.floor(Math.random() * 12) + 1
    console.log("Second orb worth: " + orb2Val);
    $("#orb2IMG").attr("data-value", orb2Val);
    var orb3Val = Math.floor(Math.random() * 12) + 1
    console.log("Third orb worth: " + orb3Val);
    $("#orb3IMG").attr("data-value", orb3Val);
    var orb4Val = Math.floor(Math.random() * 12) + 1
    console.log("Fourth orb worth: " + orb4Val);
    $("#orb4IMG").attr("data-value", orb4Val);
    
  }




});

// To randomly pick 4 orbs without creating doubles