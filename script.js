// Initialize variables
var population = 100;
var land = 1000;
var food = 3000;
var foodPerPerson = 20;
var landPrice = 20;
var year = 1;

// Function to play one year of the game
function playYear() {
  // Ask player how much land to buy
  var landToBuy = parseInt(prompt("How much land do you wish to buy (1 acre for "+ landPrice +" bushels)?"));
  
  // Check if player has enough food to buy land
  if (landToBuy * landPrice > food) {
    alert("You do not have enough food to buy that much land.");
    return;
  }
  
  // Update food, land, and food per person
  food -= landToBuy * landPrice;
  land += landToBuy;
  foodPerPerson = food / population;
  
  // Ask player how much land to plant
  var landToPlant = parseInt(prompt("How much land do you wish to plant with seed?"));
  
  // Check if player has enough land to plant
  if (landToPlant > land) {
    alert("You do not have enough land to plant that much.");
    return;
  }
  
  // Update food and land
  food += landToPlant * 2;
  land -= landToPlant;
  
  // Calculate new population
  var newPopulation = Math.floor(food / foodPerPerson);
  
  // Check if new population is less than current population
  if (newPopulation < population) {
    alert("Some people have starved to death. You have " + newPopulation + " people left.");
  }
  population = newPopulation;
  
  // Print status update
  alert("Year " + year + " report:\n" +
        "Population: " + population + "\n" +
        "Land: " + land + " acres\n" +
        "Food: " + food + " bushels\n" +
        "Food per person: " + foodPerPerson);
  
  // Increase year
  year++;
}

// Start the game
alert("Welcome to the game of Hammurabi! You are the ruler of the ancient city of Ur.\n" +
      "You must decide how much land to buy and how much to plant with seed each year.\n" +
      "If you do not have enough food to feed your people, some will starve.\n" +
      "Let's begin!");
playYear();
