//Write a Function
var startMyDay = function () {
  return `It's time for coffee and breakfast!`;
};

console.log(startMyDay());

//Write a Function with 1 Parameter
var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};

console.log(favoriteCookie("chocolate chip"));

//Write a Function with 2 Parameters
var introduce = function (name, occupation) {
  return `My name is ${name} and I am a ${occupation}.`;
};

console.log(introduce("Cesar", "Web Developer"));
console.log(introduce("Sarah", "Grapic Designer"));

//Create a Function to Capture Input
var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water have you had today?")
  );
  if (numGlasses >= 8) {
    console.log("Great job staying hydrated!");
  } else {
    console.log("You should drink more water.");
  }
};

hydrationFeedback();
