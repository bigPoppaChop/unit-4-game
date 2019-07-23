$(document).ready(function () {


  // Randomly selecting the orb images used for each round
  // Used method found at: https://stackoverflow.com/a/38571132/11215238

  // 1. Establish Array
  var orbs = ["Aegis", "Aether", "Blight", "Energy", "Heart", "Linkens", "Lotus", "Octarine", "OoV", "Points", "Refresher", "Shadow", "Soul", "Ultimate", "Vitality"];
  // 2. Shuffle the array
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

  //Game Logic

  //Establish Global variables
  var wins = 0;
  var losses = 0;

  //Generate Goal
  var goalTotal = Math.floor((Math.random() * 150) + 50);
  console.log(goalTotal);
  // Set amount to the required power div
  $("#goalTotal").text(goalTotal);
  
  $("#click-me").on("click", function (event) {
    console.log(event)
    // alert("I've been clicked!");
  });

});

// To randomly pick 4 orbs without creating doubles